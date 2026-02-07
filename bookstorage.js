//this is to store all books devide them into genres and display them when needed.

import { bookarray } from "./bdata.js";


// displaying the books 

const bookperpage = 12;
let currentpage = 1;
let filteredBooks = [...bookarray];

function applyfilters(){
    const searchEle = document.getElementById('search-input');
     const genreEle = document.getElementById('genrefilter');
      const authorEle = document.getElementById('author-filter');

      //selected by default 
      const searchItem = searchEle ? searchEle.value.toLowerCase() : "";
      const selectedGenre = genreEle ? genreEle.value : "all";
      const selectedAuthor = authorEle ? authorEle.value : "all";

      //filtering
        filteredBooks = bookarray.filter(book => {
        const matchsearch = book.title.toLowerCase().includes(searchItem);

        const matchgenre = selectedGenre === 'all'|| book.genre === selectedGenre;

        const matchauthor = selectedAuthor === 'all' || book.author === selectedAuthor;

        return matchsearch&& matchgenre &&matchauthor;
      });

      currentpage = 1;
      displaybooks(currentpage);
      setuppagination();
}
document.getElementById('search-input').addEventListener('input', applyfilters);
document.getElementById('genrefilter').addEventListener('change',applyfilters);
document.getElementById('author-filter').addEventListener('change',applyfilters);


function updatepaginationbuttons(page){
    console.log("current page is "+page);
}

function displaybooks(page){

    const container = document.getElementById('book-container');
    if(!container) return;
    container.innerHTML = ''; //clear previous

    const startindex = (page-1)*bookperpage;
    const endindex = startindex+bookperpage;

    const paginated = filteredBooks.slice(startindex,endindex);
    //html creation

    paginated.forEach(book => {
        const bookdiv = document.createElement('div');
        bookdiv.className = 'book-card';
        bookdiv.innerHTML = `
            <img src= "${book.cover}"
             alt="${book.title}" 
             style="width:100px; height:150px;" 
             onclick = "showbookdetails(${book.id})">
            <h4>${book.title}</h4>
            <p><strong>Author:</strong> ${book.author}</p>
        `;
        container.appendChild(bookdiv);
    })
    updatepaginationbuttons(page);
}

function setuppagination(){

    const controls = document.getElementById('forpaging');
    if(!controls) return;
    controls.innerHTML=''; //
    const totalpages = Math.ceil(filteredBooks.length/bookperpage);

    for (let i=1; i<= totalpages; i++){
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.addEventListener('click', () => {
            currentpage = i;
            displaybooks(currentpage);
            setuppagination();//

        });
        controls.appendChild(btn);
    }
}
//initial call
displaybooks(currentpage);
setuppagination();

//books cover description
function showbookdetails(bookID){
    const modal = document.getElementById('book-modal');
    const modalbody = document.getElementById('modal-body');

    //finding the book
    const book = bookarray.find(b => b.id ===bookID);

    if(book){
        modalbody.innerHTML = `
        <img src="${book.cover}" style="width:150px; height:200px;">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <hr>
        <p>${book.description}</p>
        <p>${book.rating + "Star"}</p>
        `;
        modal.style.display = "flex";

    }
   else{
    console.log("Book not fount");
   }
}
document.querySelector('.close-button').onclick = () => {
    document.getElementById('book-modal').style.display = "none";

};
 window.onclick= (event) =>{
    const modal = document.getElementById('book-modal');
    if(event.target == modal){
        modal.style.display ="none";
    }
 }
window.showbookdetails = showbookdetails;
document.addEventListener('DOMContentLoaded',() =>{
    if(typeof bookarray !== 'undefined' && document.getElementById('book-container')){
        displaybooks(currentpage);
        setuppagination();
    }
});

//hamburger
const hamburger = document.getElementById('hamburger');
const navElements = document.querySelector('.navelements');
hamburger.addEventListener('click',() => {
    navElements.classList.toggle('active');
});