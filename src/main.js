import { filterDataByDirectorProducer } from './data.js';
import data from './data/ghibli/ghibli.js';

/* Event to show Films and remove Home*/
let nav=document.getElementsByClassName("links");
nav[0].addEventListener('click',()=>{
  document.getElementById("Home").style.display="none";
  //Show all posters
const allPosters=document.getElementById("allPosters");
for (let i = 0; i <data.films.length; i ++) {
  funcionGeneral(data.films[i], allPosters);
}

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

//Trying to show poster in another section
/*let overlay=document.getElementsByClassName("overlay");
for(let i=0; i<20;i++){
  overlay[i].addEventListener('click',()=>{
    document.getElementById("Films").style.display="none";
    document.getElementById("posterFilm").innerHTML="";
    let imgPoster=document.createElement("img");
  imgPoster.src = data.films[i].poster;
  posterFilm.appendChild(imgPoster);
    document.getElementById("filmInfoSection").style.display="block";})
}*/

/* Event to show Films and remove Home & filmInfoSection*/
const buttonBackFilms = document.getElementById("buttonBackFilms");
buttonBackFilms.addEventListener('click', ()=>{
  document.getElementById("filmInfoSection").style.display="none";
  document.getElementById("Films").style.display="block";
});


//crearFuncionGeneral para filtros/orden de busquedas

const funcionGeneral=(posterMovies,container)=>{
  let div=document.createElement("div");
  div.classList.add("infoMovies");

  let imagenPoster=document.createElement("img");
  imagenPoster.src=posterMovies.poster;  
  div.appendChild(imagenPoster);

  let year=document.createElement("span")
  let score=document.createElement("span");
  let star=document.createElement("img");
  year.textContent=posterMovies.release_date;
  score.textContent=posterMovies.rt_score;
  star.src="bxs-star 1.png";

  let tag=document.createElement("div");
  div.appendChild(tag);
  tag.appendChild(year);
  tag.appendChild(score);
  score.appendChild(star);
  tag.classList.add("tags");


  container.appendChild(div);
}





/* Showing Posters flitrados */
let posters = document.getElementById("posters");
//filterByDirectorandProducer
const filter=document.getElementById("filter");
filter.addEventListener('change',(event)=>{
  document.getElementById("allPosters").style.display="none";
  if(event.target.value=="directorHayao"){
    posters.innerHTML="";
    let filterHayao=filterDataByDirectorProducer(data.films,"Hayao Miyazaki");
    filterHayao.forEach( (filterH)=> funcionGeneral(filterH,posters));
    
    /* for (let i = 0; i <filterHayao.length; i ++) {
      funcionGeneral(filterHayao[i], posters);
    } */
  }

  if(event.target.value=="directorIsao"){
    posters.innerHTML="";
    let filterIsao=filterDataByDirectorProducer(data.films,"Isao Takahata");
    filterIsao.forEach( (filterH)=> funcionGeneral(filterH,posters));
  }

  if(event.target.value=="productorToshio"){
    posters.innerHTML="";
    let filterToshio=filterDataByDirectorProducer(data.films,"Toshio Suzuki");
    filterToshio.forEach( (filterH)=> funcionGeneral(filterH,posters));
  }
  
})


