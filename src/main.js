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

document.body.onload=addElement;
function addElement () {
    const img=document.getElementById("poster1");
    let Poster1import=data.films[0].poster;

    
    img.src=Poster1import;
    document.body.appendChild(img);
    var currentDiv = document.getElementById("poster1");
  document.body.insertBefore(img, currentDiv);
}

console.log(data.films[0].title);

//console.log(example, data);
