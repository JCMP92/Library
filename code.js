let myLibrary = [];
let titleInitial = '';
let authorInitial = '';
let numPagesInitial = 0;

const container = document.querySelector('.lib-card-container');
const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const activeModal = document.querySelectorAll('.modal.active');
const doneBtn = document.getElementById('done-btn');
const titleInput = document.getElementById('book-name');
const authorInput = document.getElementById('book-author');
const numPagesInput = document.getElementById('num-pages');



openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
doneBtn.addEventListener('click', addBookToLibrary);


//OBJECT CONSTRUCTOR - BOOK
function Book(title, author, numPages) {

    this.title = title;
    this.author = author;
    this.numPages = numPages;

};

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const numPages = numPagesInput.value;

    let bookObj = new Book(title, author, numPages);

    if (title === '' || author === '' || numPages == 0) {
        return;
    } else if (bookValidation(bookObj)) {
        myLibrary.push(bookObj);
        createBookCard(bookObj); 
    } else {
        return;
    }
}

function bookValidation(bookToValidate){
    return !myLibrary.some(book => book.title === bookToValidate.title);
}

function createBookCard(book) {
        const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = `${book.title}`;
            const bookAuthor = document.createElement('h3');
            bookAuthor.textContent = 'by' + ' ' + `${book.author}`;
            const bookPages = document.createElement('p');
            bookPages.textContent = `${book.numPages}` + ' ' + 'pages';
            // const bookRead = document.createElement('p');
            // bookRead.textContent = `${book.read}`;




            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            // bookCard.appendChild(bookRead);
                          

    container.appendChild(bookCard);

    closeModal();
    }



    function openModal() {
        modal.classList.add('active');
        overlay.classList.add('active');
        
    }

    function closeModal() {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        
        titleInput.value = '';
        authorInput.value = '';
        numPagesInput.value = 0;
    }
