import { filterByDirectorProducer, sortScore, sortYearDesc, sortYearAsc } from './data.js';
import data from './data/ghibli/ghibli.js';

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

/* Creating General Function for containers*/
const generalFunction=(posterMovies,container)=>{
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
  star.src="pictures/bxs-star 1.png";

  let tag=document.createElement("div");
  div.appendChild(tag);
  tag.appendChild(year);
  tag.appendChild(score);
  score.appendChild(star);
  tag.classList.add("tags");


  container.appendChild(div);
}

/* Event to show Films and remove Home*/
let nav=document.getElementsByClassName("links");
nav[0].addEventListener('click',()=>{
  document.getElementById("Home").style.display="none";
  //Show all posters
  const allPosters=document.getElementById("allPosters");
  for (let i = 0; i <data.films.length; i ++) {
    generalFunction(data.films[i], allPosters);
  }
  document.getElementById("Films").style.display="block";
});


/* Showing filtered posters*/
let posters = document.getElementById("posters");
//filterByDirectorandProducer
const filter=document.getElementById("filter");
filter.addEventListener('change',(event)=>{
  document.getElementById("allPosters").style.display="none";

  if(event.target.value=="directorHayao"){
    posters.innerHTML="";
    let filterHayao=filterByDirectorProducer(data.films,"Hayao Miyazaki");
    filterHayao.forEach( filterData => generalFunction(filterData,posters));
  }

  if(event.target.value=="directorIsao"){
    posters.innerHTML="";
    let filterIsao=filterByDirectorProducer(data.films,"Isao Takahata");
    filterIsao.forEach( filterData=> generalFunction(filterData,posters));
  }

  if(event.target.value=="productorToshio"){
    posters.innerHTML="";
    let filterToshio=filterByDirectorProducer(data.films,"Toshio Suzuki");
    filterToshio.forEach( filterData=> generalFunction(filterData,posters));
  }
})

/* Showing ordering of posters*/
const sortBy = document.getElementById("sortBy");
sortBy.addEventListener('change',(event)=>{
  document.getElementById("allPosters").style.display="none";

  if(event.target.value == "score"){
    posters.innerHTML="";
    let sortByScore = sortScore(data.films, "rt_score");
    //console.log(sortByScore)
    sortByScore.forEach( sortD => generalFunction(sortD,posters));
  }

  if(event.target.value == "yearDescending"){
    posters.innerHTML="";
    let sortByYearD = sortYearDesc(data.films, "release_date");
    //console.log(sortByYear)
    sortByYearD.forEach( sortYdes => generalFunction(sortYdes,posters));
  }

  if(event.target.value == "yearAscending"){
    posters.innerHTML="";
    let sortByYearA = sortYearAsc(data.films, "release_date");
    //console.log(sortByYear)
    sortByYearA.forEach( sortYasc => generalFunction(sortYasc,posters));
  }

})



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











