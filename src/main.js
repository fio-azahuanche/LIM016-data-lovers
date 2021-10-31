//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

/* Event to show Films and remove Home*/
let nav=document.getElementsByClassName("links");
nav[0].addEventListener('click',()=>{
  document.getElementById("Home").style.display="none";
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
let div=[], img=[], year=[], score=[],tag=[], star=[], layout=[],title=[];
let posters = document.getElementById("posters");
data.films.forEach((film,index)=>{
  div[index]=document.createElement("div");
  img[index]=document.createElement("img");
  tag[index]=document.createElement("div");
  year[index]=document.createElement("span")
  score[index]=document.createElement("span");
  star[index]=document.createElement("img");
  //Create layout and title
  layout[index]=document.createElement("div");
  title[index]=document.createElement("div");

  //Add info of data
  img[index].src=film.poster;
  year[index].textContent=film.release_date;
  score[index].textContent=film.rt_score;
  star[index].src="bxs-star 1.png";
  //Add title for layout
  title[index].textContent=film.title;

  //inserts a new node(div) into posters
  posters.appendChild(div[index]);

  div[index].appendChild(img[index]);
  div[index].appendChild(tag[index]);
  tag[index].appendChild(year[index]);
  tag[index].appendChild(score[index]);
  score[index].appendChild(star[index]);
  //
  div[index].appendChild(layout[index]);
  layout[index].appendChild(title[index]);
  //
  div[index].classList.add("infoMovies");
  tag[index].classList.add("tags");
  //
  layout[index].classList.add("overlay");
  title[index].classList.add("txtCard");
})

//Trying to show poster in another section
let imgPoster=[];
let overlay=document.getElementsByClassName("overlay");
let posterFilm = document.getElementById("posterFilm");
overlay[0].addEventListener('click',()=>{
  document.getElementById("Films").style.display="none";
  document.getElementById("filmInfoSection").style.display="block";

  imgPoster[0]=document.createElement("img");
  imgPoster[0].src = data.films[0].poster;
  posterFilm.appendChild(imgPoster[0]);
})

/* Event to show Films and remove Home & filmInfoSection*/
const buttonBackFilms = document.getElementById("buttonBackFilms");
buttonBackFilms.addEventListener('click', ()=>{
  document.getElementById("filmInfoSection").style.display="none";
  document.getElementById("Films").style.display="block";
});









