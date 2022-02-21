let myLibrary = [];
const container = document.querySelector('.lib-card-container');

//OBJECT CONSTRUCTOR - BOOK
function Book(title, author, numPages, read) {

    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

};

Book.prototype.bookInfo =  function () {
    return this.title + ' ' + 'by' + ' ' + this.author + ',' + ' ' + this.numPages + ' ' + 'pages' + ',' + ' ' + this.read + '.';      
};


function addBookToLibrary(title, author, numPages, read) {
    let bookObj = new Book(title, author, numPages, read);

    if (!myLibrary.some(book => book.title === bookObj.title)) {
        myLibrary.push(bookObj);
        console.log('book added');
        createBookCard(bookObj); 
    } else {
        return;
    }
}

function createBookCard(book) {
        console.log(book)
        const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = `${book.title}`;
            const bookAuthor = document.createElement('h3');
            bookAuthor.textContent = 'by' + ' ' + `${book.author}`;
            const bookPages = document.createElement('p');
            bookPages.textContent = `${book.numPages}` + ' ' + 'pages';
            const bookRead = document.createElement('p');
            bookRead.textContent = `${book.read}`;




            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookRead);
                          

    container.appendChild(bookCard);
    }



// const dracula = new Book('Dracula', 'Bram Stoker', 418, 'already read');
// const montecristo = new Book ('The Count of Monte Cristo', 'Alexandre Dumas', 1312, 'already read')