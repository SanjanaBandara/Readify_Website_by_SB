//this is the js for the home 
//most popular books

const bookp1 = [
    {id: 1,
    title:"The Gambler",
    author:"Fyodor Dostoevsky",
    description:"A story about how gambling can destroy the life of any person",
    cover:"./web_assignment_related_stuff/fydor/12857.jpg"
    },
    {
        id: 2,
    title:"The Brothers Karamazov",
    author:"Fyodor Dostoevsky",
    description:"A murder mystery and and a series of triangular love affairs",
    cover:"./web_assignment_related_stuff/fydor/brothers-karamazov-9781625583826_hr.jpg"
    },
    {
        id: 3,
    title:"Crime and Punishment",
    author:"Fyodor Dostoevsky",
    description:"A story about a law student killing an old women and getting the punishment from his own heart",
    cover:"./web_assignment_related_stuff/fydor/crime-and-punishment-150.jpg"
    },
    {
        id: 4,
    title:"Notes from Underground",
    author:"Fyodor Dostoevsky",
    description:"A story about the loneliness and isolation in the society",
    cover:"./web_assignment_related_stuff/fydor/images.png"
    }]
 const author1 = {name:"Fyodor Dostoevsky" , image:"./web_assignment_related_stuff/fydor/250px-Dostoevskij_1863.jpg"};


const bookp2 = [
    {id: 1,
    title:"David Copperfield",
    author:"Charles Dickens",
    description:"an adventures journey of a young man from unhappy childhood to a novelist",
    cover:"./web_assignment_related_stuff/charles/61ATqKvqJXL._UF894,1000_QL80_.jpg"
    },
    {
        id: 2,
    title:"Oliver Twist",
    author:"Charles Dickens",
    description:"A story about a boy escape from the work house and mix with the gangss in london",
    cover:"./web_assignment_related_stuff/charles/81Ayo81dAOL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
    title:"Great Expectations",
    author:"Charles Dickens",
    description:"Story about the pip in 19th century england",
    cover:"./web_assignment_related_stuff/charles/cover.jpg"
    },
    {
        id: 4,
    title:"Hard Times",
    author:"Charles Dickens",
    description:"A story about victorian society , hash live and industrialization",
    cover:"./web_assignment_related_stuff/charles/5344.jpg"
    }]
 const author2 = {name:"Charles Dickens" , image:"./web_assignment_related_stuff/charles/intro-1597860780.jpg"};


const bookp3 = [
    {id: 1,
    title:"War and Peace",
    author:"Leo Tolstoy",
    description:"A story about the ellite families in russia during napolean invasion",
    cover:"./web_assignment_related_stuff/leo/125209426.jpg"
    },
    {
        id: 2,
    title:"Anna Karenina",
    author:"Leo Tolstoy",
    description:"A story about an unfaithful young russian woman  ",
    cover:"./web_assignment_related_stuff/leo/anna.jpg"
    },
    
    {
        id: 3,
    title:"After the Ball",
    author:"Leo Tolstoy",
    description:"A story of a man fall in love with daughter of a colonel",
    cover:"./web_assignment_related_stuff/leo/MV5BYmZmY2Q2NjYtMWJkOC00YjVmLWIyYmItYTM0NmQzZmQxMGIzXkEyXkFqcGc@._V1_QL75_UX190_CR0,4,190,281_.jpg"
    },
    {
        id: 4,
    title:"The death of Ivan Ilyich",
    author:"Leo Tolstoy",
    description:"A story about a sad death of a high court judge in russia",
    cover:"./web_assignment_related_stuff/leo/71E4TIko5HL._AC_UF1000,1000_QL80_.jpg"
    }]
 const author3 = {name:"Leo Tolstoy" , image:"./web_assignment_related_stuff/leo/tolstoy.jpg"};

const bookp4 = [
    {id: 1,
    title:"48 Laws of Power",
    author:"Robert Greene",
    description:"A manipulative book about the tips to live in the society",
    cover:"./web_assignment_related_stuff/robert/power.jpg"
    },
    {
        id: 2,
    title:"33 Statergies of war",
    author:"Robert Greene",
    description:"A book about stricky offensive and defensive strategies",
    cover:"./web_assignment_related_stuff/robert/35289.jpg"
    },
    {
        id: 3,
    title:"Mastery",
    author:"Robert Greene",
    description:"A bout how to become successful by examinig historic figures",
    cover:"./web_assignment_related_stuff/robert/61M2Zzw9FyL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 4,
    title:"The Laws of Human nature",
    author:"Robert Greene",
    description:"Describe thr human behavior",
    cover:"./web_assignment_related_stuff/robert/71E43Je1loL._AC_UL200_SR200,200_.jpg"
    }]
 const author4 = {name:"Robert Greene" , image:"./web_assignment_related_stuff/robert/images.jpg"};

const popular = [{author:author1,books:bookp1}
    ,{author:author2,books:bookp2},
    {author:author3,books:bookp3},
    {author:author4,books:bookp4}];


 function displaycontent(){
    const container = document.getElementById('book-container');
    const now = new Date();
    //now.setDate(now.getDate()+1); (to check whether it's working )
    const daysinceEpoch = Math.floor(now.getTime()/(1000*60*60*24));

    //cycling through the popular array
    const dailyIndex = daysinceEpoch%popular.length;

    //selecting data for today
    const todayData = popular[dailyIndex];
    const currentAuthor = todayData.author;
    const currentBooks = todayData.books;


    let contenthtml = `<figure class="author-item">
    <img src= "${currentAuthor.image}" alt="${currentAuthor.name}" class="author-image">
    <figcaption id ="authorimgid" class="author-name">${currentAuthor.name}</figcaption>
    </figure>
    `;


    currentBooks.forEach(book => { contenthtml += `
        <figure class="item-container">
        <img src="${book.cover}" alt="${book.title}" title="${book.title}">
        <figcaption class="book-title">${book.title}</figcaption>
        </figure>
        `});

    //rendering to html
 container.innerHTML = contenthtml;
 }

//call the function
displaycontent();

//hamburger
const hamburger = document.getElementById('hamburger');
const navElements = document.querySelector('.navelements');
hamburger.addEventListener('click',() => {
    navElements.classList.toggle('active');
});