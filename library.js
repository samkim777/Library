let library = [];
let indices = [];



function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

}

Book.prototype.info = function () {
    return (this.title + ',' + this.author + ',' + this.pages + ',' + this.finished);
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item)
};


function addBooktoLibrary(Book) {
    library.push(Book);
}

let content = document.getElementById('grid-container');
let grid_item = document.getElementsByClassName('grid-item');
let modal = document.getElementById('myModal');
let btn = document.getElementById('mybtn');
let span = document.getElementsByClassName('close')[0];
let submitBtn = document.getElementById('submit');
let count = 0;
let deleted = 0;
let del_button;







submitBtn.onclick = function () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;
    let books = new Book(title, author, pages, status);
    addBooktoLibrary(books);
    displayBooks();
    createDelete(count);
    modal.style.display = 'none'; // close the modal screen  
    count++;
    deleted++;
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
    content.children[deleted].textContent = library[count].info().toString();
    // It's actually here that the issue of wrong book being deleted is:
    content.style.textAlign = 'center';
}


// Call this function inside submit button
//  Create a delete button and attach to current div
createDelete = function (id) {
    let deletes = document.createElement('button');
    deletes.onclick = function () {
        deleted = deletes.parentNode.id; // Assign id of deleted div
        content.children[deletes.parentNode.id].textContent = 'Book'; // Reset information
    }
    deletes.textContent = 'Delete';
    deletes.id = 'delete_button' + id;
    if (content.children[deleted].textContent !== 'Book') {
        content.children[deleted].appendChild(deletes);
        console.log(deleted);
    } else if (content.children[deleted].textContent === 'Book') {
        deleted++;
    }
    // Debug on resetting location 
    deletes.style.float = 'left';

}
// Debugging on:

// Add a create new book button 
// Add a delete book button
// Add a change status to read button