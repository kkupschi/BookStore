let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        price: 19.99,
        likes: 1250,
        comments: []
    }
];

function showBooks() {
    let bookListElement = document.getElementById("bookList");

    bookListElement.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        let book = books[i];

        bookListElement.innerHTML += `
      <div class="card">
        <h2>${book.name}</h2>
        <p>Author: ${book.author}</p>
        <p>Preis: ${book.price} €</p>
        <p>Likes: ${book.likes}</p>
      </div>
    `;
    }
}

showBooks();
