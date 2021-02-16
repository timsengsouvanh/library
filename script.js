let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = ()=>{
     console.log(this.title,',',this.author,',',this.pages,',', this.read)
    };
}

function addBookToLibrary() {
    
}


let HP = new Book('Harry Potter', 'J.K Rowling', '400', 'I have read it')
let FearandLoathing = new Book('Fear and Loathing', 'Hunter S. Thompson', '200', 'I have read it')

