let library = []
let del_buttons = [];

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
let grid_item = document.getElementsByClassName('grid-item');
let modal = document.getElementById('myModal');
let btn = document.getElementById('mybtn');
let span = document.getElementsByClassName('close')[0];
let submitBtn = document.getElementById('submit');

let delete_button = document.createElement('button');




submitBtn.onclick = function () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;
    let books = new Book(title, author, pages, status);
    addBooktoLibrary(books);
    displayBooks();
    modal.style.display = 'none'; // close the modal screen   
}



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


displayBooks = function () {
    for (let i = 0; i < library.length; i++) {
        // document.getElementById(i.toString()).classList.add(delete_button);
        console.log(document.getElementById(i.toString()));
       // ??
        content.children[i].textContent = library[i].info().toString();
        content.style.textAlign = 'center';

        delete_button.textContent = 'Delete';
        content.children[i].appendChild(delete_button);
        delete_button.style.top = '100px';
        delete_button.style.float = 'left';
    }
}

 











// Debugging on: 

// Add a create new book button 
// Add a delete book button
// Add a change status to read button