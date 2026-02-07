//this is for the reading progress functions 
const form = document.getElementById('bookProgress');
form.addEventListener('input',() =>{
    const total  = parseFloat(document.getElementById('totpage').value) || 0 ;
    const read  = parseFloat(document.getElementById('pgread').value) || 0 ;
    const speed = parseFloat(document.getElementById('pperd').value) || 0 ;

    if(total > 0){
        //calculate the speed 
        const precentage = (read/total)*100;
        document.getElementById('ptc').value = precentage.toFixed(1) + "%";

        //calculate estimated time(in days)
        if(speed > 0){
            const neededtime = (total-read)/speed;
            document.getElementById('tocp').value = Math.ceil(neededtime) + "days";

        }


    }

});

//to save the name of the customer 
const savebtn = document.getElementById('savechanges');
const namein = document.getElementById('cusname');

savebtn.addEventListener('click',(e) => {
    e.preventDefault(); //to stop reloading the page 

    const namevalue = namein.value;

    if(namevalue!= ""){
        localStorage.setItem('savedName',namevalue);
        alert('Your Name Saved!!');
    }
    else{
        alert('Please enter your name!!');
    }


}

);

//hamburger
const hamburger = document.getElementById('hamburger');
const navElements = document.querySelector('.navelements');
hamburger.addEventListener('click',() => {
    navElements.classList.toggle('active');
});
