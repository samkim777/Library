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

let display = document.getElementById('container')
let harry_potter = new Book('Harry Potter', 'JK Rowling', '3005', true);
let alchemist = new Book('Alchemist', 'Paulo Coelho', '300', false);
addBooktoLibrary(harry_potter);
addBooktoLibrary(alchemist);
display.textContent = 'qwdjiqwdj';

for (let i = 0 ; i < library.length ; i++) {
    console.log((library[i].info().toString()));
    display.textContent = library[i].info().toString();
}




// Debugging on: 
// info logging Check
// textContent not showing -> Because textcontent needs string but library[i].info is giving a function
// toString makes function into a string, but is it the correct string? Object undefined this.toString() works
// displaying books / titles on the page