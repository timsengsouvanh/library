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
    //run function on add book mouse click
}



function createBook(obj){
    let book = document.createElement('div')
    let sub = document.createElement('sub')
    let bookarea = document.querySelector('#bookarea')
    book.classList.add('book')
    bookarea.appendChild(book)
    sub.innerHTML = obj.title + ' ' + obj.author + ' ' + obj.pages
    book.appendChild(sub)
    
    };


myLibrary.forEach(obj => {
    createBook(obj)
})


// let HP = new Book('Harry Potter', 'J.K Rowling', '400', 'I have read it')
let FearandLoathing = new Book('Fear and Loathing', 'Hunter S. Thompson', '200', 'I have read it')

