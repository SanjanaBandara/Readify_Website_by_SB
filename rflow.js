//this is for the flow page logic 
import { bookarray } from "./bdata.js";

const table = document.getElementById('detailtable');
const clearButton = document.getElementById('cleartablebtn');
//accesing local storage 
const savedData = JSON.parse(localStorage.getItem('userRecommendations')) || [];
while(table.rows.length>1){
    table.deleteRow(1);
}
savedData.forEach(savedItems => {
    const bookDetails = bookarray.find(b => b.title === savedItems.book);
    if(bookDetails){

        const row = table.insertRow(-1);
        //cell1
        const nameCell = row.insertCell(0);
        nameCell.innerHTML=`
        <div style="text-align:center">
        <img src="${bookDetails.cover}" style="width:50px; height:75px;"><br>
        <strong>${bookDetails.title}</strong>
        </div>
        `;
        //cell2
        const detailCell = row.insertCell(1);
        detailCell.innerHTML=`
        <p><strong>${bookDetails.author}</strong></p><br>
        <p>${bookDetails.description}</p>
        `;
        //cell3
        const satusCell = row.insertCell(2);
        satusCell.innerHTML=`
        <select class="status-check">
            <option value="Completed">COMPLETED</option>
            <option value="not-completed">NOT COMPLETED</option>
        </select>
        `;
    }
    
});

clearButton.addEventListener('click', () => {
    if(confirm("Are you sure you want to clear all books")){
        //removing from local storage
        localStorage.removeItem('userRecommendations');

        //clearing rows
        const table = document.getElementById('detailtable');
        while(table.rows.length>1){
            table.deleteRow(1);
        }
        alert("Table deleted!");
    }
});

//hamburger
const hamburger = document.getElementById('hamburger');
const navElements = document.querySelector('.navelements');
hamburger.addEventListener('click',() => {
    navElements.classList.toggle('active');
});