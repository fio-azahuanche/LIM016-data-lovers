import { filterByDirectorProducer, sortData,searchData } from './data.js';
import data from './data/ghibli/ghibli.js';

/* Event to create carousel of popular movies*/
const row = document.querySelector('.containerCarousel');
const leftArrow = document.getElementById('leftArrow');
leftArrow.addEventListener('click', () => {
  row.scrollLeft -= row.offsetWidth;
});

const rightArrow = document.getElementById('rightArrow');
rightArrow.addEventListener('click', () => {
  row.scrollLeft += row.offsetWidth;
});

/* Creating General Function for containers*/
const generalFunction = (posterMovies, container) => {
  container.innerHTML = "";
  let div = [], imagenPoster = [], year = [], score = [], star = [], tag = [];
  for (let i = 0; i < posterMovies.length; i++) {
    div[i] = document.createElement("div");
    div[i].classList.add("infoMovies");
    div[i].setAttribute('id', posterMovies[i].title);

    imagenPoster[i] = document.createElement("img");
    imagenPoster[i].src = posterMovies[i].poster;
    div[i].appendChild(imagenPoster[i]);

    year[i] = document.createElement("span")
    score[i] = document.createElement("span");
    star[i] = document.createElement("img");
    year[i].textContent = posterMovies[i].release_date;
    score[i].textContent = posterMovies[i].rt_score;
    star[i].src = "pictures/bxs-star 1.png";

    tag[i] = document.createElement("div");
    div[i].appendChild(tag[i]);
    tag[i].appendChild(year[i]);
    tag[i].appendChild(score[i]);
    score[i].appendChild(star[i]);
    tag[i].classList.add("tags");


    container.appendChild(div[i]);
  }

}

/* Event to show Films and remove Home*/
let nav = document.getElementsByClassName("links");
nav[0].addEventListener('click', () => {
  document.getElementById("Home").style.display = "none";
  //Show all posters
  const posters = document.getElementById("posters");
  generalFunction(data.films, posters);
  document.getElementById("Films").style.display = "block";
  //

  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster);
  //
});


/* Showing filtered posters*/
let posters = document.getElementById("posters");
//filterByDirectorandProducer
const filter = document.getElementById("filter");
filter.addEventListener('change', (event) => {

  let optionSelected = event.target.value;
  if (optionSelected == "D.Hayao Miyazaki" || optionSelected == "D.Gorō Miyazaki" || optionSelected == "D.Hiromasa Yonebayashi" || optionSelected == "D.Isao Takahata") {

    let filterDirectors = filterByDirectorProducer(data.films, optionSelected.slice(2), 'director')
    generalFunction(filterDirectors, posters)

  } else {
    let filterProducer = filterByDirectorProducer(data.films, optionSelected.slice(2), 'producer')
    generalFunction(filterProducer, posters)
  }
  //
  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster);
  //

})

/* Showing ordering of posters*/
const sortBy = document.getElementById("sortBy");
sortBy.addEventListener('change', (event) => {
  const sortItemsValue = event.target.value;

  let sortBy = sortData(data.films, sortItemsValue);
  generalFunction(sortBy, posters)

  //
  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster);
})
/* let idS=[];
  let clase=document.getElementsByClassName("infoMovies");
  for(let i=0;i<clase.length;i++){
    idS[i]=clase[i].getAttribute('id');
  }
  console.log(idS);
  let array=[];
  for(let i=0;i<idS.length;i++){
    array[i]=data.films.filter(film=>film.title===idS[i])[0];
  }

  console.log(array); */


//Buscador de imagenes
 const searchInput = document.getElementById("searchMovie");
searchInput.addEventListener('keyup', ()=>{
  let dataFilms=searchData(data.films, 'title', searchInput.value);
  generalFunction(dataFilms,posters);

  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster);

})  


//Trying to show poster in another section
const enterInfoMovie = (groupFilms) => {
  let idPosters = [];
  for (let i = 0; i < groupFilms.length; i++) {
    idPosters[i] = groupFilms[i].getAttribute('id');

    groupFilms[i].addEventListener('click', () => {
      let busquedaFiltrado = data.films.filter((film) => { return film.title === idPosters[i] })
      document.getElementById("Films").style.display = "none";
      document.getElementById("posterFilm").innerHTML = "";
      let posterFilm = document.getElementById("posterFilm");
      let imgPoster = document.createElement("img");
      imgPoster.src = busquedaFiltrado[0].poster;
      posterFilm.appendChild(imgPoster);
      document.getElementById("filmInfoSection").style.display = "block";

      let character = document.getElementById("character");
      let loc = document.getElementById("locations");
      let veh = document.getElementById("vehicles");
      enterDataChar(busquedaFiltrado[0].people, character);
      enterDataChar(busquedaFiltrado[0].locations, loc);
      enterDataChar(busquedaFiltrado[0].vehicles, veh);
    })
  }
}

const enterDataChar = (group, container) => {
  container.innerHTML = "";
  let div = [], imagenChar = [];
  for (let i = 0; i < group.length; i++) {
    div[i] = document.createElement("div");
    div[i].textContent = group[i].name;
    div[i].classList.add("infoMovies");
    div[i].setAttribute('id', group[i].name);

    imagenChar[i] = document.createElement("img");
    imagenChar[i].src = group[i].img;
    div[i].appendChild(imagenChar[i]);

    container.appendChild(div[i]);
  }
}

/* Event to show Films and remove Home & filmInfoSection*/
const buttonBackFilms = document.getElementById("buttonBackFilms");
buttonBackFilms.addEventListener('click', () => {
  document.getElementById("filmInfoSection").style.display = "none";
  document.getElementById("Films").style.display = "block";
});












