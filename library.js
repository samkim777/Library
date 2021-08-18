let library = []

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

}

Book.prototype.info = function() {
    return (this.title + ',' + this.author + ',' + this.pages + ',' + this.finished)
}


function addBooktoLibrary(Book) {
    library.push(Book)
}

let display = document.querySelectorAll('#container')
let harry_potter = new Book('Harry Potter', 'JK Rowling', '3005', true)
addBooktoLibrary(harry_potter);

for (let i = 0 ; i < library.length ; i++) {
    console.log(library[i].info());
}




// Debugging on: 
// info logging 
// textContent not showing
// displaying books / titles on the page