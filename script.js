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
    //user creates book object using constructor
    //push into array myLibrary []
    refresh()
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

document.querySelector('#add').addEventListener('click', () => {
 prompt('title?', 'title')
   
})


