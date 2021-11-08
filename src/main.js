import { filterByDirectorProducer, sortData,searchData } from './data.js';
import data from './data/ghibli/ghibli.js';

const getById = label => document.getElementById(label);
const getByClass = label => document.getElementsByClassName(label);

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
};

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
};

const enterCardChar = (group, container,className) => {
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
};

const card = (element,item) => {
  getById("cardEachCharacter").innerHTML = "";
  let div = document.createElement("div");
  let img = document.createElement("img");

  let divDetalles=document.createElement("div");
  switch(item){
    case 'people':{
      let p1=document.createElement("p");
      let p2=document.createElement("p");
      let p3=document.createElement("p");
      let p4=document.createElement("p");
      let p5=document.createElement("p");

      p1.textContent=element.gender;
      p2.textContent=element.age;
      p3.textContent=element.eye_color;
      p4.textContent=element.hair_color;
      p5.textContent=element.specie;

      divDetalles.appendChild(p1);
      divDetalles.appendChild(p2);
      divDetalles.appendChild(p3);
      divDetalles.appendChild(p4);
      divDetalles.appendChild(p5);
      break;
    }
    case 'vehicles':{
      let P1=document.createElement("p");
      let P2=document.createElement("p");
      let P3=document.createElement("p");
      let P4=document.createElement("p");

      P1.textContent=element.description;
      P2.textContent=element.vehicle_class;
      P3.textContent=element.length;
      P4.textContent=element.pilot.name;

      divDetalles.appendChild(P1);
      divDetalles.appendChild(P2);
      divDetalles.appendChild(P3);
      divDetalles.appendChild(P4);
      break;
    }

    case 'locations':{
      let V1=document.createElement("p");
      let V2=document.createElement("p");
      let V3=document.createElement("p");
      let V4=document.createElement("p");

      V1.textContent=element.climate;
      V2.textContent=element.terrain;
      V3.textContent=element.surface_water;
      V4.textContent=element.residents;

      divDetalles.appendChild(V1);
      divDetalles.appendChild(V2);
      divDetalles.appendChild(V3);
      divDetalles.appendChild(V4);
      break;
    }
  }

  img.src = element.img;
  div.appendChild(img);
  getById("cardEachCharacter").appendChild(div);
  getById("cardEachCharacter").appendChild(divDetalles);
};

const dataNueva=(clase)=>{
  let idS=[];
  for(let i=0;i<clase.length;i++){
    idS[i]=clase[i].getAttribute('id');
  }
  let array=[];
  for(let i=0;i<idS.length;i++){
    array[i]=data.films.filter(film=>film.title==idS[i])[0];
  }
return array;
};

//Creating card information each people, location, vehicle
const classChar = (grupoArray,plv) => {
  let clickCharacter = grupoArray.map(character => character.name);
  clickCharacter.forEach((item) => {
    getById(item).addEventListener('click', () => {
      let personaje = grupoArray.filter(character => character.name == item);
      card(personaje[0],plv);
      getById("cardEachCharacter").style.display = "block";
    })
  })
};

//Showing poster in another section
const enterInfoMovie = (groupFilms) => {
  let idPosters = [];
  for (let i = 0; i < groupFilms.length; i++) {
    idPosters[i] = groupFilms[i].getAttribute('id');

    groupFilms[i].addEventListener('click', () => {
      let busquedaFiltrado = data.films.filter((film) => { return film.title === idPosters[i] })
      getById("Films").style.display = "none";
      enterDataMovie(busquedaFiltrado[0],getById("descriptionOfEachMovie"));
      getById("filmInfoSection").style.display = "block";

      enterCardChar(busquedaFiltrado[0].people, getById("character"),"infoCharPeople");
      classChar(busquedaFiltrado[0].people,'people');
      enterCardChar(busquedaFiltrado[0].locations, getById("locations"),"infoCharLocations");
      classChar(busquedaFiltrado[0].locations,'locations');
      enterCardChar(busquedaFiltrado[0].vehicles, getById("vehicles"),"infoCharVehicles");
      classChar(busquedaFiltrado[0].vehicles,'vehicles');
    })
  }
};

/* Event to create carousel of popular movies*/
const row = document.querySelector('.containerCarousel');
getById("leftArrow").addEventListener('click', () => {
  row.scrollLeft -= row.offsetWidth;
});

getById("rightArrow").addEventListener('click', () => {
  row.scrollLeft += row.offsetWidth;
});

/* Creating event for logo*/
getById("logoHome").addEventListener('click', ()=>{
  getById("Films").style.display = "none";
  getById("Home").style.display = "block";
});

/* Event to show Films and remove Home*/
let nav = getByClass("links");
nav[0].addEventListener('click', () => {
  getById("Home").style.display = "none";
  //Show all posters
  generalFunction(data.films, getById("posters"));
  getById("Films").style.display = "block";
  enterInfoMovie(getByClass("infoMovies"));
});



getById("listDirector").addEventListener('click', (event) => {
  let optionSelected = event.target.value;
  let listD = ["Hayao Miyazaki", "Gorō Miyazaki", "Hiromasa Yonebayashi", "Isao Takahata"];
  listD.forEach((item,index)=>{
    if (optionSelected == index) {
      let filterDirectors = filterByDirectorProducer(data.films, item, 'director')
      generalFunction(filterDirectors, getById("posters"))
    }
  });
  enterInfoMovie(getByClass("infoMovies"));
});

getById("listProducer").addEventListener('click', (event)=>{
  let optionSelected = event.target.value;
  let listP = ["Toshio Suzuki", "Isao Takahata", "Toru Hara", "Hayao Miyazaki", "Yoshiaki Nishimura"];
  listP.forEach((item,index)=>{
    if (optionSelected == index) {
      let filterProducer = filterByDirectorProducer(data.films, item, 'producer')
      generalFunction(filterProducer, getById("posters"))
    }
  });
  enterInfoMovie(getByClass("infoMovies"));
});

/* Showing ordering of posters*/
getById("sortBy").addEventListener('change', (event) => {
  const sortItemsValue = event.target.value;
  let classPoster = getByClass("infoMovies");
  let sortBy = sortData(dataNueva(classPoster), sortItemsValue);
  generalFunction(sortBy, getById("posters"))
  enterInfoMovie(classPoster);
})


//Buscador de imagenes
getById("searchMovie").addEventListener('keyup', (e)=>{
  let classPoster = getByClass("infoMovies");
  let DataFilms =dataNueva(classPoster);
  let id=DataFilms.map(film=>film.title)
  let hiddenClass=[];
  id.forEach((item,index)=>{
    hiddenClass[index]=getById(item);
    hiddenClass[index].classList.add("hidden");
  })

  let Datanew=searchData(DataFilms,"title", e.target.value);
  let newId=Datanew.map(film=>film.title)

  let showClass=[];
  newId.forEach((item,index)=>{
    showClass[index]=document.getElementById(item);
    showClass[index].classList.remove("hidden");
  })
  enterInfoMovie(classPoster);
})






/* Event to show Films and remove filmInfoSection*/
getById("buttonBackFilms").addEventListener('click', () => {
  getById("filmInfoSection").style.display = "none";
  getById("Films").style.display = "block";
});

/* Creating event for filmInfoSection's logo */
getById("logoBackHome").addEventListener('click', ()=>{
  getById("filmInfoSection").style.display = "none";
  getById("Home").style.display = "block";
});











