//this is for arandom book generato
import { bookarray } from "./bdata.js";
//get the id's :)
const genreselect = document.getElementById('genreselect');
const lengthselect = document.getElementById('lengthselect');
const pickbtn = document.getElementById('pickfromdrop');
const resultDiv = document.getElementById('Randomresult');
//save related inputs
const bookinput = document.getElementById('recomendbk');
const customerinput = document.getElementById('recomendcus');
const savebtn = document.getElementById('recbtn');

function pickrandom(){
    const selectGenre = genreselect.value;
    const selectLength = lengthselect.value;
    console.log("Looking for:", selectGenre,selectLength); //what user select
    //filtering
    const filteredbooks = bookarray.filter(book => {
        return book.genre === selectGenre && book.length === selectLength;
    });
    console.log("Found matchin",filteredbooks.length);

    if(filteredbooks.length>0){
        //random selection
        const randomIndex = Math.floor(Math.random()*filteredbooks.length);
        const book = filteredbooks[randomIndex];

        bookinput.value = book.title;

        //display the result 
        resultDiv.innerHTML = `
        <h3 id="recbook">We Recommend You</h3>
        <div class ="bookcard">
        <img src="${book.cover}" style="width:100px; height:200px;">
        <h4>${book.title}</h4>
        <p>BY : ${book.author}</p>
        <p>Description : ${book.description}</p>
        </div>
        `;
    }

    else{
        resultDiv.innerHTML = `<p>No book can be found for the filtration please try again!</p>`;
        bookinput.value = "";
    }

}
pickbtn.addEventListener('click',pickrandom);
//saving logic
 savebtn.addEventListener('click' ,(e) => {
    e.preventDefault();
    const customerName = customerinput.value.trim();
    const bookName = bookinput.value.trim();

    if(customerName&&bookName){
        const newRecommendation = {
            customer:customerName,
            book:bookName,
        };

        const saveRecs = JSON.parse(localStorage.getItem('userRecommendations')) || [];
    //adding a new one 
    saveRecs.push(newRecommendation);
    
    localStorage.setItem('userRecommendations',JSON.stringify(saveRecs));

    alert(`Saved! ${bookName} is added to the list`);

    //clear the book
    bookinput.value ="";
    
    }
    
    else{
        alert("Please enter your name and pick a book before saving!!")
    }

 });

 //hamburger
const hamburger = document.getElementById('hamburger');
const navElements = document.querySelector('.navelements');
hamburger.addEventListener('click',() => {
    navElements.classList.toggle('active');
});


