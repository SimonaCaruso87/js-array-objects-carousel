/*Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/

//Creare un'array di oggetti
const imagesArray = [
    {
        image: '05.png',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: '02.jpeg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: '03.jpeg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: '04.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: '01.jpg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
];

// DEFINZIONE FUNZIONE PER AUTOPLAY

function autoplaySlide(){

    if(itemActive < items.length - 1){

        // Togliere la classe active all'imagine e del pallino attuale
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        // Incremento
        itemActive++;

        // Aggiungere la classe active all'elemento successivo

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active")
        thumbnails[itemActive].classList.add("active")

    }else{
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        itemActive = 0;

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active") 
        thumbnails[itemActive].classList.add("active")
    }

}



//Creare dinamicamente i div con le immagini del carosello

let itemContent = '';
let itemsThumbnails= ' ';

for (let i = 0; i < imagesArray.length; i++) {
    itemContent +=
    `<div class="item">
        <img src="./img/${imagesArray[i].image }">
        <div class="item-description">
            <h2>${imagesArray[i].title}</h2>
            <p>${imagesArray[i].description}</p>
         </div>
    </div>`; 

    itemsThumbnails += 
    `<div class="thumb">
        <img src="./img/${imagesArray[i].image
    }"></div>`; 
};


//inserire le immagini nel div contenitore

const itemsSlider = document.querySelector('.item-slider').innerHTML += itemContent;

const thumbnailsPrev = document.querySelector(".thumbnails")
thumbnailsPrev.innerHTML += itemsThumbnails


//Prendere la prima immagine dell'array e renderla attiva

const items = document.getElementsByClassName('item');
let itemActive = 0;
items[itemActive].classList.add('active');


//Rendere attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');
console.log(circles);
circles[itemActive].classList.add('active');


const thumbnails = document.getElementsByClassName('thumb');
console.log(thumbnails);
thumbnails[itemActive].classList.add('active');


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

    if ( itemActive > 0 ) {

        // Togliere la classe active all'immagine e del pallino attuale
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
    
        //Decremento
        itemActive--;

        // Aggiungere la classe active all'elemento precedente
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumb[itemActive].classList.add('active');
    }
    else {
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        itemActive = items.length - 1;

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active") 
        thumbnails[itemActive].classList.add("active")
    };
    
    
});

prev.addEventListener ('click', function() {

    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    thumb[itemActive].classList.remove('active');

    if ( itemActive === 0 ) {
        itemActive = imagesArray.length - 1;
    }
    else {
        itemActive--;
    };

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    thumb[itemActive].classList.add('active');
});

setInterval(autoplaySlide , 3000);





