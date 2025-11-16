let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        price: 19.99,
        likes: 1250,
        liked: false,
        comments: [
            {
                name: "Leser123",
                comment: "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                name: "Bookworm84",
                comment: "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            }
        ]
    }
];

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
    let html = '<div class="card">';
    html += '<h2>' + book.name + '</h2>';
    html += '<p>Author: ' + book.author + '</p>';
    html += '<p>Preis: ' + book.price + ' €</p>';
    html += '<p>Likes: <span id="likeCount-' + index + '">' + book.likes + '</span>';
    html += ' <span id="heart-' + index + '" class="heart ' + (book.liked ? 'liked' : '') + '"';
    html += ' onclick="toggleLike(' + index + ')">❤</span></p>';
    html += '<div class="comments"><h3>Kommentare:</h3>';
    html += '<div id="comments-' + index + '"></div>';
    html += '<input id="commentInput-' + index + '" type="text" placeholder="Schreibe dein Kommentar...">';
    html += '<button onclick="addComment(' + index + ')">Senden</button>';
    html += '</div></div>';
    return html;
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
}

function escapeHtml(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

showBooks();
