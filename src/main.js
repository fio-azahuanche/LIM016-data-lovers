import { filterByDirectorProducer, sortData, searchFilms } from './data.js';
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
  let div = document.createElement("div");
  div.classList.add("infoMovies");
  div.setAttribute('id', posterMovies.title);

  let imagenPoster = document.createElement("img");
  imagenPoster.src = posterMovies.poster;
  div.appendChild(imagenPoster);

  let year = document.createElement("span")
  let score = document.createElement("span");
  let star = document.createElement("img");
  year.textContent = posterMovies.release_date;
  score.textContent = posterMovies.rt_score;
  star.src = "pictures/bxs-star 1.png";

  let tag = document.createElement("div");
  div.appendChild(tag);
  tag.appendChild(year);
  tag.appendChild(score);
  score.appendChild(star);
  tag.classList.add("tags");


  container.appendChild(div);
}

/* Event to show Films and remove Home*/
let nav = document.getElementsByClassName("links");
nav[0].addEventListener('click', () => {
  document.getElementById("Home").style.display = "none";
  //Show all posters
  const posters = document.getElementById("posters");
  for (let i = 0; i < data.films.length; i++) {
    generalFunction(data.films[i], posters);
  }
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
  posters.innerHTML = "";
  if (optionSelected == "D.Hayao Miyazaki" || optionSelected == "D.Gorō Miyazaki" || optionSelected == "D.Hiromasa Yonebayashi" || optionSelected == "D.Isao Takahata") {

    let filterDirectors = filterByDirectorProducer(data.films, optionSelected.slice(2), 'director')
    filterDirectors.forEach(filterData => generalFunction(filterData, posters));
  } else {
    let filterProducer = filterByDirectorProducer(data.films, optionSelected.slice(2), 'producer')
    filterProducer.forEach(filterData => generalFunction(filterData, posters));
  }
  //
  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster);
  //

})

/* Showing ordering of posters*/
const sortBy = document.getElementById("sortBy");
sortBy.addEventListener('change', (event) => {

  posters.innerHTML = "";
  const sortItemsValue = event.target.value;
  
  let sortBy = sortData(data.films, sortItemsValue);
  sortBy.forEach(sortItems => generalFunction(sortItems, posters));
  //
   let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster); 
  //
})
/* let idS=[];
  let clase=document.getElementsByClassName("infoMovies");
  for(let i=0;i<clase.length;i++){
    idS[i]=clase[i].getAttribute('id');
  }
  console.log(idS);
  let array=[];
  for(let i=0;i<idS.length;i++){
    array[i]=data.films.filter(film=>film.title===idS[i]);
  }

  console.log(array); */





//Buscador de imagenes
const searchMovie = document.getElementById("searchMovie");
searchMovie.addEventListener('click', () => {
  searchFilms("#searchMovie", ".infoMovies");
  //
  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster);
  //
});






//Trying to show poster in another section
const enterInfoMovie = (groupFilms) => {
  let idPosters = [];
  let idPostersClick = [];
  for (let i = 0; i < groupFilms.length; i++) {
    idPosters[i] = groupFilms[i].getAttribute('id');
    idPostersClick[i] = document.getElementById(idPosters[i]);
    idPostersClick[i].addEventListener('click', () => {
      let mensaje = idPostersClick[i].getAttribute('id');
      let busquedaFiltrado = data.films.filter((film) => { return film.title === mensaje })
      document.getElementById("Films").style.display = "none";
      document.getElementById("posterFilm").innerHTML = "";
      let posterFilm=document.getElementById("posterFilm");
      let imgPoster = document.createElement("img");
      imgPoster.src = busquedaFiltrado[0].poster;
      posterFilm.appendChild(imgPoster);
      document.getElementById("filmInfoSection").style.display = "block";
      console.log(busquedaFiltrado)
    })
  }
}


/* Event to show Films and remove Home & filmInfoSection*/
const buttonBackFilms = document.getElementById("buttonBackFilms");
buttonBackFilms.addEventListener('click', () => {
  document.getElementById("filmInfoSection").style.display = "none";
  document.getElementById("Films").style.display = "block";
});












