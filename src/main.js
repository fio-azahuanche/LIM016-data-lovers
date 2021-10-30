//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

/* Evento para mostrar y quitar las secciones Peliculas y Principal*/
let nav=document.getElementsByClassName("enlaces");
nav[0].addEventListener('click',()=>{
  document.getElementById("Principal").style.display="none";
  document.getElementById("Peliculas").style.display="block";
})

/* Evento para crear carrusel de peliculas populares*/
const fila = document.querySelector('.contenedorCarrusel');
const flechaIzquierda = document.getElementById('flechaIzquierda');
flechaIzquierda.addEventListener('click', ()=>{
  fila.scrollLeft -= fila.offsetWidth;
});

const flechaDerecha = document.getElementById('flechaDerecha');
flechaDerecha.addEventListener('click', ()=>{
  fila.scrollLeft += fila.offsetWidth;
});

/* Mostrando Posters y año de las peliculas*/
let div=[], img=[], year=[], score=[],etiqueta=[], star=[];

data.films.forEach((film,index)=>{
  div[index]=document.createElement("div");
  img[index]=document.createElement("img");
  etiqueta[index]=document.createElement("div");
  year[index]=document.createElement("span")
  score[index]=document.createElement("span");
  star[index]=document.createElement("img");


  img[index].src=film.poster;
  year[index].textContent=film.release_date;
  score[index].textContent=film.rt_score;
  star[index].src="bxs-star 1.png";


  posters.appendChild(div[index]);
  div[index].appendChild(img[index]);
  div[index].appendChild(etiqueta[index]);
  etiqueta[index].appendChild(year[index]);
  etiqueta[index].appendChild(score[index]);
  score[index].appendChild(star[index]);


  div[index].classList.add("infoPeliculas");
  etiqueta[index].classList.add("etiquetas");
  img[index].classList.add("imgPosters");


  img[index].addEventListener('click',()=>{
    document.getElementById("Peliculas").style.display="none";
    document.getElementById("SectionInfoPeliculas").style.display="block";
  })


})

//Comentario para probar por segunda vez el pull request
