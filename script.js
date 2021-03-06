
class Book {
     constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };
}

let myLibrary = [
    new Book('Harry Potter', 'J.K Rowling', '400', true),
    new Book('Fear and Loathing', 'Hunter S. Thompson', '200', true),
];

function createBook(obj){
    let bookarea = document.querySelector('#bookarea')

    let book = document.createElement('div')
   
    book.classList.add('book')
    bookarea.appendChild(book)

    let sub = document.createElement('div')
    sub.innerHTML = obj.title
    sub.classList.add('booktitle')
    book.appendChild(sub)

    let sub2 = document.createElement('div')
    sub2.innerHTML = obj.author
    book.appendChild(sub2)

    let sub3 = document.createElement('div')
    sub3.innerHTML = obj.pages + ' ' + 'pages'
    book.appendChild(sub3)

    let sub4 = document.createElement('div')
    sub4.classList.add('read')
    book.appendChild(sub4)

    let del = document.createElement('button')
    del.innerHTML = '&times;'
    del.classList.add('deletebutton')
    del.setAttribute('data', myLibrary.indexOf(obj))
    del.addEventListener('click', () => {
        index = del.getAttribute('data')
                myLibrary.splice(index, 1);
                console.log(myLibrary)
                clear()
                refresh()
    })

    sub4.appendChild(del)
    
    let sub7 = document.createElement('div')
    sub7.classList.add('readdel')
    sub4.appendChild(sub7)

    let sub5 = document.createElement('div')
    sub5.innerHTML = 'Read'
    sub7.appendChild(sub5)

    let sub6 = document.createElement('input')
    sub6.setAttribute('type', 'checkbox')
    sub6.checked = obj.read
    sub6.addEventListener('change', () => {
        if (sub6.checked) {
            obj.read = true
            console.log(obj.read)
            console.log(myLibrary)
        }
        else {
            obj.read = false
            console.log(obj.read)
            console.log(myLibrary)
        }
    })  
    sub7.appendChild(sub6)
    
    };

//adds new book via add book modal, fires when clicking add book on modal    
function addBookToLibrary() {
    let title = document.querySelector('#titleinput').value
    let author = document.querySelector('#authorinput').value
    let pages = document.querySelector('#pagesinput').value
    let read = document.querySelector('#modal-check').checked
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    document.querySelector('#modal').classList.remove('active') 
    document.querySelector('#overlay').classList.remove('active')
    document.querySelectorAll("input").forEach(input => {
        input.value = ""
    })  
    clear()
    refresh() 
}

//loads books
function refresh(){
myLibrary.forEach(obj => {
    createBook(obj)
})}

//initial load
refresh()

//clears books
function clear(){
    document.querySelectorAll('.book').forEach(book => book.remove(''));
}

//MODAL event listeners
document.querySelector('#add').addEventListener('click', () => {
document.querySelector('#modal').classList.add('active') 
document.querySelector('#overlay').classList.add('active')   
})

document.querySelector('#close').addEventListener('click', () => {
document.querySelector('#modal').classList.remove('active') 
document.querySelector('#overlay').classList.remove('active')
document.querySelectorAll("input").forEach(input => {
    input.value = ""
})   
})
