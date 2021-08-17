let library = []

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

}

Book.prototype.info = function() {
    console.log(this.title + this.author);
    // Why does this log ƒ () {
   // console.log(this.title + this.author); ?? 
}


function addBooktoLibrary(Book) {
    library.push(Book)
}

let display = document.querySelectorAll('#container')
let harry_potter = new Book('asdj', 'adsad', 'asdqd', true)
console.log(harry_potter.info);
addBooktoLibrary(harry_potter);

for (let i = 0; i < library.length; i++) {
    display.textContent = library[i].info;
    console.log(library[i].info);
}
