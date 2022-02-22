let myLibrary = [];

const container = document.querySelector('.lib-card-container');
const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const activeModal = document.querySelectorAll('.modal.active');



openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//OBJECT CONSTRUCTOR - BOOK
function Book(title, author, numPages, read) {

    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

};

function addBookToLibrary(title, author, numPages, read) {
    let bookObj = new Book(title, author, numPages, read);

    if (bookValidation(bookObj)) {
        myLibrary.push(bookObj);
        console.log('book added');
        createBookCard(bookObj); 
    } else {
        return;
    }
}

function bookValidation(bookToValidate){
    return !myLibrary.some(book => book.title === bookToValidate.title);
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
// const montecristo = new Book ('The Count of Monte Cristo', 'Alexandre Dumas', 1312, 'already read');

    function openModal() {
        modal.classList.add('active');
        overlay.classList.add('active');
        
    }

    function closeModal() {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }