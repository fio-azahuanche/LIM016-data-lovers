//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
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
//for(let i =0;i<data.films.length;i++){
    let div=document.createElement("div");
    let img=document.createElement("img");
    let year=document.createElement("span")
    div.id="infoPoster"+0;
    img.src=data.films[0].poster;
    year.textContent=data.films[0].release_date;
    poster1.appendChild(div);
    infoPoster0.appendChild(img);
    infoPoster0.appendChild(year);
//}


//console.log(example, data);
