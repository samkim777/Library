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
    library.push(Book);

}

let content = document.getElementById('grid-container');
let grid_item = document.getElementsByClassName('grid-item');
let modal = document.getElementById('myModal');
let btn = document.getElementById('mybtn');
let span = document.getElementsByClassName('close')[0];
let submitBtn = document.getElementById('submit');
let count = 0;
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
    deleteBook();
    modal.style.display = 'none'; // close the modal screen  
    // Array.from(grid_item)[count].textContent = library[count].info().toString(); 
    // Array.from(del_button)[count].style.display = 'block';
    // // Want to display both textContent as well as making del_button be visible
    // // But whenever I set a value for textContent, del_button is suddenly undefined
    count++;
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
    content.children[count].textContent = library[count].info().toString();
    // Here the library.length runs twice and overrides the existing button
    // Is there any reason to be using a loop here?
    // Might as well use the same count variable as in submitBtn
    content.style.textAlign = 'center';
}


// Call this function inside submit button
//  Create a delete button and attach to current div
createDelete = function (id) {
    let deletes = document.createElement('button');
    deletes.textContent = 'Delete';
    deletes.id = 'delete_button' + id;
    content.children[id].appendChild(deletes);
    deletes.style.float = 'left';
    deletes.onclick = function () {
        console.log(deletes.parentNode.id);
        content.children[deletes.parentNode.id].textContent = 'Book'; // Reset information
    }
}

deleteBook = function () {
    console.log(document.getElementById('delete_button' + count).parentNode.id);   
}





// Debugging on: 

// Add a create new book button 
// Add a delete book button
// Add a change status to read button