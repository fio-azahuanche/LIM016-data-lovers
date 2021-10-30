//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

/* Event to show Films and remove Principal*/
let nav=document.getElementsByClassName("links");
nav[0].addEventListener('click',()=>{
  document.getElementById("Principal").style.display="none";
  document.getElementById("Films").style.display="block";
});

/* Event to show Films and remove Principal, filInfoSections*/
const buttonBackFilms = document.getElementById("buttonBackFilms");
buttonBackFilms.addEventListener('click', ()=>{
  document.getElementById("Principal").style.display="none";
  document.getElementById("filmInfoSection").style.display="none";
  document.getElementById("Films").style.display="block";
});

/* Event to create carousel of popular movies*/
const row = document.querySelector('.containerCarousel');
const leftArrow = document.getElementById('leftArrow');
leftArrow.addEventListener('click', ()=>{
  row.scrollLeft -= row.offsetWidth;
});

const rightArrow = document.getElementById('rightArrow');
rightArrow.addEventListener('click', ()=>{
  row.scrollLeft += row.offsetWidth;
});

/* Showing Posters and year of the films*/
let div=[], img=[], year=[], score=[],tag=[], star=[];

data.films.forEach((film,index)=>{
  div[index]=document.createElement("div");
  img[index]=document.createElement("img");
  tag[index]=document.createElement("div");
  year[index]=document.createElement("span")
  score[index]=document.createElement("span");
  star[index]=document.createElement("img");


  img[index].src=film.poster;
  year[index].textContent=film.release_date;
  score[index].textContent=film.rt_score;
  star[index].src="bxs-star 1.png";


  posters.appendChild(div[index]);
  div[index].appendChild(img[index]);
  div[index].appendChild(tag[index]);
  tag[index].appendChild(year[index]);
  tag[index].appendChild(score[index]);
  score[index].appendChild(star[index]);


  div[index].classList.add("infoMovies");
  tag[index].classList.add("tags");
  img[index].classList.add("imgPosters");


  img[index].addEventListener('click',()=>{
    document.getElementById("Films").style.display="none";
    document.getElementById("filmInfoSection").style.display="block";
  })


})

//Comentario para probar por segunda vez el pull request
