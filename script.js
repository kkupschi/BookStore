

function showBooks() {
    let bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        bookListElement.innerHTML += createBookHtml(book, i);
    }
    for (let i = 0; i < books.length; i++) {
        renderComments(i);
    }
}

function createBookHtml(book, index) {
    return /*html*/ `
    <div class="card">

      <div class="card-header">${book.name}</div>

      <div class="card-hero">
        <div class="cover"></div>
      </div>

      <div class="card-section price-row">
        <span class="price">${formatPrice(book.price)}</span>
        <span class="likes">
          <span id="likeCount-${index}">${book.likes}</span>
          <span id="heart-${index}"
                class="heart ${book.liked ? "liked" : ""}"
                onclick="toggleLike(${index})">
            ❤
          </span>
        </span>
      </div>

      <div class="card-section meta">
        <div><span class="label">Author</span><span class="value">${book.author}</span></div>
        <div><span class="label">Erscheinungsjahr</span><span class="value">${book.publishedYear}</span></div>
        <div><span class="label">Genre</span><span class="value">${book.genre}</span></div>
      </div>

      <div class="divider"></div>

      <div class="card-section comments">
        <h3>Kommentare:</h3>

        <div id="comments-${index}" class="comment-list"></div>

        <input id="commentInput-${index}"
               type="text"
               placeholder="Schreibe dein Kommentar..." />

        <button onclick="addComment(${index})">Senden</button>
      </div>

    </div>
  `;
}

function toggleLike(index) {
    let book = books[index];
    let countEl = document.getElementById("likeCount-" + index);
    let heartEl = document.getElementById("heart-" + index);

    if (book.liked) {
        book.liked = false;
        book.likes = book.likes - 1;
    } else {
        book.liked = true;
        book.likes = book.likes + 1;
    }

    countEl.innerText = book.likes;
    heartEl.classList.toggle("liked");

    saveBooksToStorage();
}

function renderComments(index) {
    let commentsElement = document.getElementById("comments-" + index);
    commentsElement.innerHTML = "";
    let book = books[index];

    for (let i = 0; i < book.comments.length; i++) {
        let c = book.comments[i];
        let safeName = escapeHtml(c.name);
        let safeText = escapeHtml(c.comment);
        let line = "<p><b>[" + safeName + "]</b>: " + safeText + "</p>";
        commentsElement.innerHTML += line;
    }
}

function addComment(index) {
    let input = document.getElementById("commentInput-" + index);
    let text = input.value.trim();

    if (text === "") {
        return;
    }

    let newComment = { name: "Kris", comment: text };
    books[index].comments.push(newComment);
    input.value = "";
    renderComments(index);

    saveBooksToStorage();
}

function escapeHtml(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatPrice(price) {
    let fixed = Number(price).toFixed(2);
    return fixed.replace(".", ",") + " €";
}

function saveBooksToStorage() {
    let data = JSON.stringify(books);
    localStorage.setItem("bookstoreData", data);
}

function loadBooksFromStorage() {
    let data = localStorage.getItem("bookstoreData");

    if (!data) {
        return;
    }

    let parsed = JSON.parse(data);

    if (Array.isArray(parsed)) {
        books = parsed;
    }
}

loadBooksFromStorage();
showBooks();