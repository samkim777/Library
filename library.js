let library = []

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

}

Book.prototype.info = function() {
    return (this.title + ',' + this.author + ',' + this.pages + ',' + this.finished);
}


function addBooktoLibrary(Book) {
    library.push(Book)
}

let content = document.getElementById('container');
let harry_potter = new Book('Harry Potter', 'JK Rowling', '3005', true);
let alchemist = new Book('Alchemist', 'Paulo Coelho', '300', false);
addBooktoLibrary(harry_potter);
addBooktoLibrary(alchemist);


for (let i = 0 ; i < library.length ; i++) {
    
}





// Debugging on: 

// Making flex box/ grid boxes and putting textContent inside them
// Making new books on button event
// displaying books / titles on the page