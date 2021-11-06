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

/* Creating event for logo*/
const logoHome = document.getElementById("logoHome");
logoHome.addEventListener('click', ()=>{
  document.getElementById("Films").style.display = "none";
  document.getElementById("Home").style.display = "block";
});

/* Creating General Function for containers*/
const generalFunction = (posterMovies, container) => {
  container.innerHTML = "";
  let div = [], imagenPoster = [], year = [], score = [], star = [], tag = [];
    posterMovies.forEach((item,i)=>{
      div[i] = document.createElement("div");
      div[i].classList.add("infoMovies");
      div[i].setAttribute('id', item.title);

      imagenPoster[i] = document.createElement("img");
      imagenPoster[i].src = item.poster;
      div[i].appendChild(imagenPoster[i]);

      year[i] = document.createElement("span")
      score[i] = document.createElement("span");
      star[i] = document.createElement("img");
      year[i].textContent = item.release_date;
      score[i].textContent = item.rt_score;
      star[i].src = "pictures/goldStar.png";

      tag[i] = document.createElement("div");
      div[i].appendChild(tag[i]);
      tag[i].appendChild(year[i]);
      tag[i].appendChild(score[i]);
      score[i].appendChild(star[i]);
      tag[i].classList.add("tags");
      year[i].classList.add("year");
      score[i].classList.add("score");



      container.appendChild(div[i]);
    })
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



//velo como queda
const dataNueva=(clase)=>{
  let idS=[];
  for(let i=0;i<clase.length;i++){
    idS[i]=clase[i].getAttribute('id');
  }
  let array=[];
  for(let i=0;i<idS.length;i++){
    array[i]=data.films.filter(film=>film.title==idS[i])[0];
  }
return array;}










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
//
  let classPoster = document.getElementsByClassName("infoMovies");
  
  
  //let sortBy = sortData(data.films, sortItemsValue);
  let sortBy = sortData(dataNueva(classPoster), sortItemsValue);
  generalFunction(sortBy, posters)
  //
  enterInfoMovie(classPoster);
})



//Buscador de imagenes
 const searchInput = document.getElementById("searchMovie");
searchInput.addEventListener('keyup', (e)=>{
  //verificalo
  let classPoster = document.getElementsByClassName("infoMovies");
  let DataFilms =dataNueva(classPoster);
  let IDD=DataFilms.map(el=>el.title)
  let CLASE=[];
  IDD.forEach((el,index)=>{
    CLASE[index]=document.getElementById(el);  
    CLASE[index].classList.add("filter");
  })
 
  let Datanew=searchData(DataFilms,"title", e.target.value);
  let iddd=Datanew.map(el=>el.title)
  
  let clase=[];
  iddd.forEach((el,index)=>{
    clase[index]=document.getElementById(el);  
    clase[index].classList.remove("filter");
  })
  enterInfoMovie(classPoster);
  
  /* let dataFilms=searchData(data.films, 'title', searchInput.value);
  generalFunction(dataFilms,posters);

  let classPoster = document.getElementsByClassName("infoMovies");
  enterInfoMovie(classPoster); */

})


//Showing poster in another section
const enterInfoMovie = (groupFilms) => {
  let idPosters = [];
  for (let i = 0; i < groupFilms.length; i++) {
    idPosters[i] = groupFilms[i].getAttribute('id');

    groupFilms[i].addEventListener('click', () => {
      let busquedaFiltrado = data.films.filter((film) => { return film.title === idPosters[i] })
      document.getElementById("Films").style.display = "none";
      let descriptionOfEachMovie= document.getElementById("descriptionOfEachMovie");
      enterDataMovie(busquedaFiltrado[0],descriptionOfEachMovie);
      document.getElementById("filmInfoSection").style.display = "block";

      let character = document.getElementById("character");
      let loc = document.getElementById("locations");
      let veh = document.getElementById("vehicles");
      enterDataChar(busquedaFiltrado[0].people, character,"infoCharPeople");
      enterDataChar(busquedaFiltrado[0].locations, loc,"infoCharLocations");
      enterDataChar(busquedaFiltrado[0].vehicles, veh,"infoCharVehicles");
    })
  }
}

const enterDataChar = (group, container,className) => {
  container.innerHTML = "";
  let div = [], imagenChar = [];
  group.forEach((item,i)=>{
    div[i] = document.createElement("div");
    div[i].textContent = item.name;
    div[i].classList.add(className);
    div[i].setAttribute('id', item.name);

    imagenChar[i] = document.createElement("img");
    imagenChar[i].src = item.img;
    div[i].appendChild(imagenChar[i]);

    container.appendChild(div[i]);
  })
}

const enterDataMovie = (group, container)=>{
  container.innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute('id', 'posterFilm');

  let image = document.createElement("img");
  image.src = group.poster;
  div.appendChild(image);

  let divDescription = document.createElement("div");
  divDescription.setAttribute('id', 'filmDescription');

  let titleFilm = document.createElement("h1");
  titleFilm.textContent = group.title;

  let yearFilm = document.createElement("h2");
  yearFilm.textContent = group.release_date;

  let descriptionFilm = document.createElement("p");
  descriptionFilm.textContent = group.description;

  let directorFilm = document.createElement("div");
  let imgDirector = document.createElement("img");
  imgDirector.src = "pictures/director.png";
  directorFilm.append(imgDirector);
  let txtDirector = document.createElement("span");
  txtDirector.textContent = "Director: " + group.director;
  directorFilm.appendChild(txtDirector);
  /* directorFilm.textContent =  "Director: "+ group.director; */


  let producerFilm = document.createElement("div");
  let imgProducer = document.createElement("img");
  imgProducer.src = "pictures/producer.png";
  producerFilm.append(imgProducer);
  let txtProducer = document.createElement("span");
  txtProducer.textContent = "Producer: " + group.producer;
  producerFilm.appendChild(txtProducer);


  divDescription.appendChild(titleFilm);
  divDescription.appendChild(yearFilm);
  divDescription.appendChild(descriptionFilm);
  divDescription.appendChild(directorFilm);
  divDescription.appendChild(producerFilm);

  container.appendChild(div);
  container.appendChild(divDescription);
}




/* Event to show Films and remove filmInfoSection*/
const buttonBackFilms = document.getElementById("buttonBackFilms");
buttonBackFilms.addEventListener('click', () => {
  document.getElementById("filmInfoSection").style.display = "none";
  document.getElementById("Films").style.display = "block";
});

/* Creating event for filmInfoSection's logo */
const logoBackHome = document.getElementById("logoBackHome");
logoBackHome.addEventListener('click', ()=>{
  document.getElementById("filmInfoSection").style.display = "none";
  document.getElementById("Home").style.display = "block";
});



//INTENTO MODELO (se debe meter estocuando cree las clases);Creating card information each people, location, vehicle
let cardPeople=document.getElementsByClassName("infoCharPeople");
let cardsId=[];
for(let i=0;i<cardPeople.length;i++){
  cardsId[i]=cardPeople[i].getAttribute("id");
  cardPeople[i].addEventListener('click',()=>{
    document.getElementById("cardEachCharacter").style.display="block";
    showCard(cardsId[i]);
  })
}
const showCard=(byId,movie)=>{//deberia recibir 3 parametros : id del personaje, la pelicula en la que buscaremos,y si es people o location o vehicle
  let groupChar=data.films.filter(el=>el.title==movie);
  let personaje=groupChar[0].people.filter(el=>el.name==byId);
  card(personaje[0]);
}
let cardEachCharacter=document.getElementById("cardEachCharacter");
const card=(element)=>{
  let div=document.createElement("div");
  let img=document.createElement("img");
  img.src=element.img;
  div.appendChild(img);
  cardEachCharacter.appendChild(div);
}





