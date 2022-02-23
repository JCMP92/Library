let myLibrary = [];

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
const alreadyReadInput = document.getElementById('read-it?');



openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
doneBtn.addEventListener('click', addBookToLibrary);



//OBJECT CONSTRUCTOR - BOOK
function Book(title, author, numPages, alreadyRead) {

    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.alreadyRead = alreadyRead;

};

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const numPages = numPagesInput.value;
    const alreadyRead = alreadyReadInput.checked;

    let bookObj = new Book(title, author, numPages, alreadyRead);

    if (title === '' || author === '' || numPages === '') {
        return;
    } else if (bookValidation(bookObj)) {
        myLibrary.push(bookObj);
        createBookCard(bookObj); 
    } else {
        alert("You already have that title in your library!");
        restartForm();
    }
}

function bookValidation(bookToValidate){
    return !myLibrary.some(book => book.title === bookToValidate.title);
}

function createBookCard(book) {
        const bookCard = document.createElement('div');
            const bookTitle = document.createElement('h2');
            const bookAuthor = document.createElement('h3');
            const bookPages = document.createElement('p');
            const bookRead = document.createElement('button');
            const bookDelete = document.createElement('button');

            bookCard.setAttribute('id', `${book.title}`);

            bookCard.classList.add('book-card');
            bookRead.classList.add = ('read-or-not'); //<-----------------------------------------------------------------------------
            bookDelete.classList.add('delete-btn');

            bookTitle.textContent = `${book.title}`;
            bookAuthor.textContent = 'by' + ' ' + `${book.author}`;
            bookPages.textContent = `${book.numPages}` + ' ' + 'pages';
            bookDelete.textContent = 'Remove';
            //BookRead Text Content-------------------------------------------------------------------------------------------------------
            if (alreadyReadInput.checked == true) {
                bookRead.textContent = 'Read';
            } else {
                bookRead.textContent = 'Not read';
            }
            

            bookDelete.addEventListener('click', function(e){
                let indexBook= myLibrary.findIndex(book => book.title === e.target.parentNode.id);
                let removeBook = document.getElementById(`${book.title}`);
                myLibrary.splice(indexBook, 1);
                removeBook.remove();
            })


            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookRead);
            bookCard.appendChild(bookDelete);
                          

    container.appendChild(bookCard);

    closeModal();
    restartForm();
    }



    function openModal() {
        modal.classList.add('active');
        overlay.classList.add('active');
        
    }

    function closeModal() {
        modal.classList.remove('active');
        overlay.classList.remove('active');   
    }

    function restartForm() {
        titleInput.value = '';
        authorInput.value = '';
        numPagesInput.value = '';
        alreadyReadInput.checked = '';
    }