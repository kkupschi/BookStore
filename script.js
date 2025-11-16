let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        price: 19.99,
        likes: 1250,
        liked: false,
        comments: []
    }
];

function showBooks() {
    let bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        let b = books[i];

        bookListElement.innerHTML += `
      <div class="card">
        <h2>${b.name}</h2>
        <p>Author: ${b.author}</p>
        <p>Preis: ${b.price} €</p>

        <p>
          Likes: <span id="likeCount-${i}">${b.likes}</span>
          <span 
            id="heart-${i}" 
            class="heart ${b.liked ? "liked" : ""}" 
            onclick="toggleLike(${i})"
          >
            ❤
          </span>
        </p>
      </div>
    `;
    }
}

function toggleLike(index) {
    let b = books[index];
    let countEl = document.getElementById("likeCount-" + index);
    let heartEl = document.getElementById("heart-" + index);

    if (b.liked === false) {
        b.liked = true;
        b.likes++;
    } else {
        b.liked = false;
        b.likes--;
    }

    countEl.innerText = b.likes;

    if (b.liked) {
        heartEl.classList.add("liked");
    } else {
        heartEl.classList.remove("liked");
    }
}

showBooks();
