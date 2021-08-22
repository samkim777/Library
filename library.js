let library = []

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

}

Book.prototype.info = function () {
    return (this.title + ',' + this.author + ',' + this.pages + ',' + this.finished);
}


function addBooktoLibrary(Book) {
    library.push(Book)
}

let content = document.getElementById('grid-container');
let grid_item = document.getElementById('grid-item');
let modal = document.getElementById('myModal');
let btn = document.getElementById('mybtn');
let span = document.getElementsByClassName('close')[0];

let harry_potter = new Book('Harry Potter', 'JK Rowling', '3005', true);
let alchemist = new Book('Alchemist', 'Paulo Coelho', '300', false);
addBooktoLibrary(harry_potter);
addBooktoLibrary(alchemist);

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}



for (let i = 0; i < library.length; i++) {
    content.children[i].textContent = library[i].info().toString();
}





// Debugging on: 

// Add a create new book button 
// Add a delete book button
// Add a change status to read button