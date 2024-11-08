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

const submitBook = document.querySelector(".submit");

// remove focus from modal 
modal.addEventListener("click", function (e) {

    const target = e.target;

    if(target.className === "modal-container" || target.className === "close-modal"){
        modal.style.display = "none";
    }
})


addBook.addEventListener("click", function (e) {

    modal.style.display = "flex";
})


submitBook.addEventListener("click", function (e) {
    e.preventDefault();
    const data = new FormData(document.querySelector("#form"))

    addBookToLibrary({
        title: data.get("title"),
        author: data.get("author"),
        year: data.get("year"),
        read: data.get("read-book"),
        img: data.get("img-url") || ""

    })

    modal.style.display = "none";
})
