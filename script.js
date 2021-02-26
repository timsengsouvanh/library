
let myLibrary = [
    new Book('Harry Potter', 'J.K Rowling', '400', 'read'),
    new Book('Fear and Loathing', 'Hunter S. Thompson', '200', 'read'),
    new Book('The Power of Now', 'Eckhart Tolle', '150', 'read')
];

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
    let title = document.querySelector('#titleinput').value
    let author = document.querySelector('#authorinput').value
    let pages = document.querySelector('#pagesinput').value
    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    clear()
    refresh()
    document.querySelector('#modal').classList.remove('active') 
    document.querySelector('#overlay').classList.remove('active')
    document.querySelectorAll("input").forEach(input => {
        input.value = ""
    })   
}

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

    this.del = document.createElement('button')
    this.del.innerHTML = '&times;'
    del.classList.add('deletebutton')
    this.del.setAttribute('data', myLibrary.indexOf(obj))
    this.del.addEventListener('click', () => {
        index = del.getAttribute('data')
                myLibrary.splice(index, 1);
                console.log(myLibrary)
                clear()
                refresh()
    })
    // document.querySelectorAll('.deletebutton').forEach(item => {
    //     item.addEventListener('click', () => {
    //         index = this.del.getAttribute('data')
    //         myLibrary.splice(index, 1);
    //         clear()
    //         refresh()
           
    //     })
    // } )
    sub4.appendChild(del)
    
    let sub7 = document.createElement('div')
    sub7.classList.add('readdel')
    sub4.appendChild(sub7)

    let sub5 = document.createElement('div')
    sub5.innerHTML = 'Read'
    sub7.appendChild(sub5)

    let sub6 = document.createElement('input')
    sub6.setAttribute('type', 'checkbox')
    sub7.appendChild(sub6)
    
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

// document.querySelectorAll('.deletebutton').forEach(item => {
//     item.addEventListener('click', () => {
//         index = this.del.getAttribute('data')
//         myLibrary.splice(index, 1);
//         clear()
//         refresh()
       
//     })
// } )



// document.querySelector('#modal-add-book').addEventListener('click', () => {
//     addBookToLibrary()
// })

