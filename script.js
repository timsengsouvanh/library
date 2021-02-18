function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = ()=>{
     console.log(this.title,',',this.author,',',this.pages,',', this.read)
    };
}

let myLibrary = [
    new Book('Harry Potter', 'J.K Rowling', '400', 'I have read it'),
    new Book('Fear and Loathing', 'Hunter S. Thompson', '200', 'I have read it'),
    new Book('The Power of Now', 'Eckhart Tolle', '150', 'I have read it')
];

function addBookToLibrary() {
    let title = document.querySelector('#titleinput').value
    let author = document.querySelector('#authorinput').value
    let pages = document.querySelector('#pagesinput').value
    let newBook = new Book(title, author, pages) //error here, need to make a into a string first
    myLibrary.push(newBook)
    clear()
    refresh()
    
    document.querySelectorAll("input").forEach(input => {
        input.value = ""
    })   
}

function createBook(obj){
    let book = document.createElement('div')
    let sub = document.createElement('div')
    let sub2 = document.createElement('div')
    let sub3 = document.createElement('div')
    let bookarea = document.querySelector('#bookarea')
    book.classList.add('book')
    bookarea.appendChild(book)
    sub.innerHTML = obj.title
    sub2.innerHTML = obj.author
    sub3.innerHTML = obj.pages + ' ' + 'pages'
    sub.classList.add('booktitle')
    book.appendChild(sub)
    book.appendChild(sub2)
    book.appendChild(sub3)
    };

function refresh(){

myLibrary.forEach(obj => {
    createBook(obj)
})}

refresh()


function clear(){
    document.querySelectorAll('.book').forEach(book => book.remove(''));
}

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

// document.querySelector('#modal-add-book').addEventListener('click', () => {
//     addBookToLibrary()
// })

