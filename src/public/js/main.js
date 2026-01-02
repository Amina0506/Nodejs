const booksList = document.getElementById('books');
const detailsContent = document.getElementById('detailsContent');

async function loadBooks() {
    try {
        const res = await fetch('/api/books');
        const books = await res.json();
        booksList.innerHTML = '';

        books.forEach(book => {
            const li = document.createElement('li');

            const titleSpan = document.createElement('span');
            titleSpan.textContent = book.title;
            titleSpan.style.cursor = 'pointer';
            titleSpan.style.fontWeight = 'bold';
            titleSpan.onclick = () => showBookDetails(book);
            li.appendChild(titleSpan);
            li.appendChild(document.createTextNode(' geschreven door: '));

            const authorSpan = document.createElement('span');
            authorSpan.textContent = book.author.name;
            authorSpan.style.cursor = 'pointer';
            authorSpan.onclick = () => showAuthorDetails(book.author);
            li.appendChild(authorSpan);

            booksList.appendChild(li);
        });
    } catch (err) {
        booksList.textContent = 'Boek kan niet geladen worden';
        console.error(err);
    }
}

function showBookDetails(book) {
    detailsContent.textContent = `BOOK:
Titel: ${book.title}
Auteur: ${book.author.name}
Geboortejaar auteur: ${book.author.birthYear}
Genre: ${book.genre}
Jaar: ${book.year}
Content: ${book.content}
`;
}

function showAuthorDetails(author) {
    detailsContent.textContent = `AUTHOR:
Naam: ${author.name}
Geboortejaar: ${author.birthYear}
Bio: ${author.bio}
Genres: ${author.genres.join(', ')}
`;
}

loadBooks();