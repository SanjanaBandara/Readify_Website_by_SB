//for the feedback page 

//the array
const storearray = [];

const savebtn = document.getElementById('savebutton');
const feedform = document.getElementById('fbform');

savebtn.addEventListener('click' ,function(event){

    event.preventDefault();

    const userName = document.getElementById('namefeed').value;
    const userEmail = document.getElementById('email').value;
    const usermsg = document.getElementById('msgg').value;

    if(userName&&userEmail&&usermsg){
        const newentry = {
            name:userName,
            email:userEmail,
            message:usermsg
        };
       // push to the actual array
       storearray.push(newentry);

       console.log("Saved successfuly ", storearray);
       feedform.reset();   //to clear the form
       alert("Thanks for your feedback");
       

    }

    else{
        alert("Please fill all the fields before saving !");

    }
}








);

//hamburger
const hamburger = document.getElementById('hamburger');
const navElements = document.querySelector('.navelements');
hamburger.addEventListener('click',() => {
    navElements.classList.toggle('active');
});