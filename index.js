console.log("this is tutorial 29");

//constructor creation
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type
}

//displaying constructor
function Display() {

}

//add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding to UI");

    tableBody = document.getElementById('tableBody')
    let uiString = `
             <tr>
                     <td>${book.name} </td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>    
              </tr>   `
    tableBody.innerHTML += uiString;
}
//implememnting the clear func
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
}
//implememnting the validate func
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }

}

//implememnting the show func
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Messge:</strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                </div>`;

    setTimeout(function () {
        message.innerHTML = ''                 //yha blank isliye qki hme htana h msg ko  
    }, 2000);
}

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted the form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.clear();
        display.add(book);
        display.show('success', 'your book has been successfully added ');
    } else {
        display.show('error', 'sorry you cannot add this book')
    }
    e.preventDefault();
}