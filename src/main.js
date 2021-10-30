//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let nav=document.getElementsByClassName("enlaces");
nav[0].addEventListener('click',()=>{
  document.getElementById("Principal").style.display="none";
  document.getElementById("Peliculas").style.display="block";
})



const fila = document.querySelector('.contenedorCarrusel');

const flechaIzquierda = document.getElementById('flechaIzquierda');
flechaIzquierda.addEventListener('click', ()=>{
  fila.scrollLeft -= fila.offsetWidth;
});

const flechaDerecha = document.getElementById('flechaDerecha');
flechaDerecha.addEventListener('click', ()=>{
  fila.scrollLeft += fila.offsetWidth;
});

//Peliculas
let div=[];
let img=[];
let year=[];

data.films.forEach((film,index)=>{
  div[index]=document.createElement("div");
    img[index]=document.createElement("img");
    year[index]=document.createElement("span")
    img[index].src=film.poster;
    year[index].textContent=film.release_date;
    posters.appendChild(div[index]);
    div[index].appendChild(img[index]);
    div[index].appendChild(year[index]);
    div[index].classList.add("infoPeliculas");
})
//Comentario para ver si funciona el pull request
