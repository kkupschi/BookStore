let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        likes: 1250,
        liked: true,
        price: 19.99,
        publishedYear: 2018,
        genre: "Fantasy",
        comments: [
            {
                name: "Leser123",
                comment: "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                name: "Bookworm84",
                comment: "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                name: "FantasyFanatic",
                comment: "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                name: "SciFiGuru",
                comment: "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                name: "NovelLover",
                comment: "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        name: "Der vergessene Pfad",
        author: "Maximilian Schwarz",
        likes: 980,
        liked: false,
        price: 14.50,
        publishedYear: 2021,
        genre: "Fantasy",
        comments: []
    },
    {
        name: "Die Farben des Himmels",
        author: "Laura Blau",
        likes: 1520,
        liked: true,
        price: 22.95,
        publishedYear: 2019,
        genre: "Romantik",
        comments: [
            {
                name: "LeserPeter",
                comment: "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                name: "BookLover21",
                comment: "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                name: "FantasyNerd",
                comment: "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                name: "SciFiEnthusiast",
                comment: "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                name: "ReadingAddict",
                comment: "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        name: "Das Rätsel der Zeit",
        author: "Alexander Weiss",
        likes: 750,
        liked: false,
        price: 18.00,
        publishedYear: 2020,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BuchKenner",
                comment: "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                name: "LeseWurm",
                comment: "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    },
    {
        name: "Der letzte Wächter",
        author: "Sabine Grün",
        likes: 1300,
        liked: true,
        price: 16.75,
        publishedYear: 2017,
        genre: "Fantasy",
        comments: []
    },
    {
        name: "Im Schatten des Mondes",
        author: "Philipp Silber",
        likes: 890,
        liked: false,
        price: 12.30,
        publishedYear: 2022,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BücherLiebhaber",
                comment: "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
            },
            {
                name: "Leseratte",
                comment: "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
            }
        ]
    },
    {
        name: "Jenseits der Sterne",
        author: "Oliver Schwarz",
        likes: 1450,
        liked: true,
        price: 21.00,
        publishedYear: 2015,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Leser123",
                comment: "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
            }
        ]
    },
    {
        name: "Das verborgene Königreich",
        author: "Elena Gold",
        likes: 920,
        liked: false,
        price: 17.50,
        publishedYear: 2020,
        genre: "Fantasy",
        comments: [
            {
                name: "Bookworm92",
                comment: "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    },
    {
        name: "Liebe in Zeiten des Krieges",
        author: "Emilia Rot",
        likes: 1800,
        liked: true,
        price: 19.99,
        publishedYear: 2016,
        genre: "Romantik",
        comments: [
            {
                name: "Bibliophile23",
                comment: "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
            },
            {
                name: "StorySeeker",
                comment: "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
            },
            {
                name: "SciFiExplorer",
                comment: "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
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
    html += '<div class="cover"></div>';
    html += '<p>Author: ' + book.author + '</p>';
    html += '<p>Jahr: ' + book.publishedYear + '</p>';
    html += '<p>Genre: ' + book.genre + '</p>';
    html += '<p>Preis: ' + formatPrice(book.price) + '</p>';
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
