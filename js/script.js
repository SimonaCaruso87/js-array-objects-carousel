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

let item_content = '';
let item_thumb = '';

for (let i = 0; i < imagesArray.length; i++) {
    //CONCATENIAMO POSSO ANCHE USARE ITEM_CONTENT.INNERHTML= ITEM_CONTENT.INNERHTML + `<div class="item"><img src="./img/${ images_array[i] }"></div>`; 
    item_content += `<div class="item"><img src="./img/${ imagesArray[i] }"></div>`; 
    item_thumb += `<div class="thumb"><img src="./img/${ imagesArray[i] }"></div>`; 
};

const items_slider = document.querySelector('.item-slider').innerHTML = item_content;
const items_thumbnails = document.querySelector('.item-thumbnails').innerHTML = item_thumb;

const items = document.getElementsByClassName('item');
const circles = document.getElementsByClassName('circle');
const thumb = document.getElementsByClassName('thumb');
console.log(thumb);

let item_active = 0;

items[item_active].classList.add('active');
circles[item_active].classList.add('active');
thumb[item_active].classList.add('active');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    thumb[item_active].classList.remove('active');

    if ( item_active === imagesArray.length-1 ) {
        item_active = 0;
    }
    else {
        item_active++;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    thumb[item_active].classList.add('active');
});

prev.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    thumb[item_active].classList.remove('active');

    if ( item_active === 0 ) {
        item_active = imagesArray.length - 1;
    }
    else {
        item_active--;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    thumb[item_active].classList.add('active');
});






