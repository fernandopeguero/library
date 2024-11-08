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