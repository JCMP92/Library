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
    myLibrary.push(bookObj);
    console.log('book added')
}

function eachBook() {
    myLibrary.forEach(function(book) {
        console.log(book)
        let bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.textContent = `${book.title}`;
    container.appendChild(bookCard);
    });     
}



// const dracula = new Book('Dracula', 'Bram Stoker', 418, 'already read');
// const montecristo = new Book ('The Count of Monte Cristo', 'Alexandre Dumas', 1312, 'already read')