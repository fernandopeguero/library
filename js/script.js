let library = [
    {
        title: "Harry Potter",
        author: "Jk. Rowling",
        year: 1995,
        read: true,
        poster:  "https://m.media-amazon.com/images/I/813RId-1qiL._AC_UF894,1000_QL80_.jpg"

    },
    {
        title: "A song of fire and ice",
        author: "George R. R. Martin",
        year: 1996,
        read: true,
        poster:  "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"

    }
];

// constructor function to create book
function Book(title, author, year, read = false,img = '') {
    this.title = title;
    this.author = author;
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

const bookContainer = document.querySelector(".book-container");

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
    const form = new FormData(document.querySelector("#form"));

    const title = form.get("title");
    const author = form.get("author");
    const year = Number(form.get("year") || 0);
    const imageUrl = form.get("img-url") || "";

    

    if(title.trim() === "" || author.trim() === "" ) return;

    let checkbox = false;

    if(form.get("read-book") === "on") {
        checkbox = true
    }

    addBookToLibrary({
        title: title,
        author: author,
        year: year || 0,
        read: checkbox,
        img: imageUrl || ""

    })

    modal.style.display = "none";

    // display all the books
    bookContainer.innerHTML = "";

    for(let i = 0; i < library.length; i++){
       const book = library[i];
        displayBooks(i, book)
    }

})


function displayBooks(index ,{title, author, year, read = false , poster = ""}) {
    
    const li = document.createElement("li");
    li.classList.add("book")
    li.setAttribute("data-index", index)

    // create image element 
    const image = document.createElement("img")
    image.src = poster
    image.alt = title
    // append to container 
    li.appendChild(image);

    // create icon element 
    const icon = document.createElement("i");
    icon.classList.add("fa-solid" ,"fa-trash")
    li.appendChild(icon);

    //create checkbox container 
    const round = document.createElement("div");
    round.classList.add("round");

    // create checkbox element
    const input = document.createElement("input")
    input.type = "checkbox";
    input.name = `checkbox-${title.replaceAll(" ", "")}`;
    input.id = `checkbox-${title.replaceAll(" ", "")}`;
    input.checked = read;

    // create label element
    const label = document.createElement("label")
    label.setAttribute("for", `checkbox-${title.replaceAll(" ", "")}`);

    // appending checkbox and label to round container 
    round.appendChild(input)
    round.appendChild(label);

    // appending checkbox container to li 
    li.appendChild(round);

    // create info container for title and author
    const info = document.createElement("div");
    info.classList.add("info");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = title;

    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = author;

    // append book title and author
    info.appendChild(bookTitle)
    info.appendChild(bookAuthor);

    li.appendChild(info);


    bookContainer.appendChild(li);
}



function showLibrary() {
    bookContainer.innerHTML = "";

    for(let i = 0; i < library.length; i++){
       const book = library[i];
        displayBooks(i, book)
    }
}

showLibrary();