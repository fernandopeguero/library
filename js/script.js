let library = [];

// constructor function to create book
function Book(title, author, year, read = false,img = '') {
    this.title = title;
    this.authro = author;
    this.year = year;
    this.read = read;
    this.poster = img;
}


function addBookToLibrary(book) {
    library.push(new Book(book.title, book.author, book.year, book.read, book.img));
}

const modal = document.querySelector(".modal-container");
const addBook = document.querySelector(".add-book");

// remove focus from modal 
modal.addEventListener("click", function (e) {

    const target = e.target;

    if(target.className === "modal-container"){
        target.style.display = "none";
    }
})


addBook.addEventListener("click", function (e) {

    modal.style.display = "flex";
})
