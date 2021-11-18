import { filterByDirectorProducer, sortData, searchData } from './data.js';

const getById = label => document.getElementById(label);
const getByClass = label => document.getElementsByClassName(label);

let dataFilms;
fetch('./data/ghibli/ghibli.json')
  .then(studio => studio.json())//establece la conexión con el archivo
  .then(data => {
    dataFilms = data.films; //llama a la data
  })

let home = getById("Home");
let nav = getByClass("links");
let navFilms=nav[1];
let navStatistics=nav[2];
let filmInfoSection = getById("filmInfoSection");

let leftArrow=getById("leftArrow");
let rightArrow=getById("rightArrow");
let posters = getById("posters");
let films = getById("Films");
let sortBy = getById("sortBy");
let searchMovie = getById("searchMovie");
let reloadFilter = getById("reload");
let descriptionOfEachMovie = getById("descriptionOfEachMovie");
let listDirector = getById("listDirector");
let listProducer = getById("listProducer");
let character = getById("character");
let locations = getById("locations");
let vehicles = getById("vehicles");
let cardModal = getById("cardModal");
let Statistics = getById("Statistics");

/* Creating General Function for containers*/
const generalFunction = (posterMovies, container) => {
  container.innerHTML = "";
  let div = [], imagenPoster = [], year = [], score = [], star = [], tag = [], divTitle = [];
  posterMovies.forEach((item, i) => {
    div[i] = document.createElement("div");
    div[i].classList.add("infoMovies");
    div[i].setAttribute('id', item.title);
    divTitle[i] = document.createElement("div");
    divTitle[i].textContent = item.title;

    imagenPoster[i] = document.createElement("img");
    imagenPoster[i].src = item.poster;
    div[i].appendChild(divTitle[i]);
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
    divTitle[i].classList.add("divTitle");

    container.appendChild(div[i]);
  })
};

const enterDataMovie = (group, container) => {
  container.innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute('id', 'posterFilm');

  div.innerHTML = `<img src=${group.poster}>`

  let divDescription = document.createElement("div");
  divDescription.setAttribute('id', 'filmDescription');

  divDescription.innerHTML = `<h1>${group.title}</h1>
  <h2>${group.release_date}</h2>
  <p>${group.description}</p>`

  let directorFilm = document.createElement("div");
  let txtDirector = document.createElement("span");
  txtDirector.innerHTML = `<img src="pictures/director.png"> <b>Director:</b> ${group.director}`;
  directorFilm.appendChild(txtDirector);

  let producerFilm = document.createElement("div");
  let txtProducer = document.createElement("span");
  txtProducer.innerHTML = `<img src="pictures/producer.png"> <b>Producer:</b> ${group.producer}`;
  producerFilm.appendChild(txtProducer);

  divDescription.appendChild(directorFilm);
  divDescription.appendChild(producerFilm);

  container.appendChild(div);
  container.appendChild(divDescription);
};

const enterCardChar = (group, container, className) => {
  container.innerHTML = "";
  group.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<img src="${item.img}"><div>${item.name.split(" ")[0]}</div>`
    div.classList.add(className);
    div.setAttribute('id', item.name);
    container.append(div);
  })
};

const card = (element, item) => {
  getById("dni").innerHTML = "";
  getById("cardEachCharacter1").innerHTML = "";
  getById("cardEachCharacter1").innerHTML=`<h1>${element.name}</h1><hr>`

  let generalDiv = document.createElement("div");
  generalDiv.classList.add("flex");

  let divImgCard = document.createElement("div");
  divImgCard.innerHTML = `<img src="${element.img}">`
  divImgCard.classList.add("imgCardModal");

  let divDetallesGrid = document.createElement("div");
  divDetallesGrid.classList.add("detailsCardModal");
  switch (item) {
    case 'people': {
      divDetallesGrid.innerHTML = `
      <ul>
      <li><b>Gender:</b> ${element.gender}</li>
      <li><b>Age:</b> ${element.age}</li>
      <li><b>Eye Color:</b> ${element.eye_color}</li>
      <li><b>Hair color:</b> ${element.hair_color}</li>
      <li><b>Specie:</b> ${element.specie}</li></ul>`
      break;
    }

    case 'locations': {
      divDetallesGrid.innerHTML = `
      <ul>
      <li><b>Climate:</b> ${element.climate}</li>
      <li><b>Terrain:</b> ${element.terrain}</li>
      <li><b>Surface water:</b> ${element.surface_water}</li>
      <li><b>Residents:</b> ${element.residents}</li></ul>`
      break;
    }

    case 'vehicles': {
      divDetallesGrid.innerHTML = `
      <ul>
      <li><b>Description: </b>${element.description}</li>
      <li><b>Vehicle class: </b>${element.vehicle_class}</li>
      <li><b>Length: </b>${element.length}</li>
      <li><b>Pilot: </b>${element.pilot.name}</li></ul>`

      break;
    }
  }

  getById("dni").textContent="ID: "+element.id.slice(0,8);
  generalDiv.appendChild(divImgCard);
  generalDiv.appendChild(divDetallesGrid);
  getById("cardEachCharacter1").appendChild(generalDiv);
  
};
getById("closeModal").addEventListener('click', () => {
  cardModal.style.display = "none";
})

const dataNueva = (clase) => {
  let idS = [],array = [];
  for (let i = 0; i < clase.length; i++) {
    idS[i] = clase[i].getAttribute('id');
  }
  for (let i = 0; i < idS.length; i++) {
    array[i] = dataFilms.filter(film => film.title == idS[i])[0];
  }
  return array;
};

//Creating card information each people, location, vehicle
const classChar = (grupoArray, plv) => {
  let clickCharacter = grupoArray.map(character => character.name);
  clickCharacter.forEach((item) => {
    getById(item).addEventListener('click', () => {
      let personaje = grupoArray.filter(character => character.name == item);
      card(personaje[0], plv);
      cardModal.style.display = "block";

    })

  })
};

//Showing poster in another section
const enterInfoMovie = (groupFilms) => {
  let idPosters = [];
  for (let i = 0; i < groupFilms.length; i++) {
    idPosters[i] = groupFilms[i].getAttribute('id');

    groupFilms[i].addEventListener('click', () => {
      let busquedaFiltrado = dataFilms.filter((film) => { return film.title === idPosters[i] })
      films.style.display = "none";
      enterDataMovie(busquedaFiltrado[0], descriptionOfEachMovie);
      filmInfoSection.style.display = "block";

      enterCardChar(busquedaFiltrado[0].people, character, "infoCharPeople");
      classChar(busquedaFiltrado[0].people, 'people');
      enterCardChar(busquedaFiltrado[0].locations, locations, "infoCharLocations");
      classChar(busquedaFiltrado[0].locations, 'locations');
      enterCardChar(busquedaFiltrado[0].vehicles, vehicles, "infoCharVehicles");
      classChar(busquedaFiltrado[0].vehicles, 'vehicles');
    })
  }
};

/* Event to create carousel of popular movies*/
const row = document.querySelector('.containerCarousel');
leftArrow.addEventListener('click', () => {
  row.scrollLeft -= row.offsetWidth;
});

rightArrow.addEventListener('click', () => {
  row.scrollLeft += row.offsetWidth;
});

/* Creating event for logo*/
getById("logoHome").addEventListener('click', () => {
  films.style.display = "none";
  home.style.display = "block";
});

/* Event to show Films and remove Home*/
navFilms.addEventListener('click', () => {
  home.style.display = "none";
  //Show all posters
  generalFunction(dataFilms, posters);
  films.style.display = "block";
  enterInfoMovie(getByClass("infoMovies"));
});

const hidden_show_Class = (classToChange, classToRemove) => {
  let actualData = dataNueva(classToChange);
  let idData = actualData.map(film => film.title);
  let classToHidden = [],classToShow = [];
  idData.forEach((id, index) => {
    classToHidden[index] = getById(id);
    classToHidden[index].classList.add("hidden");
  })

  classToRemove.forEach((item, index) => {
    classToShow[index] = getById(item);
    classToShow[index].classList.remove("hidden");
  })
}

listDirector.addEventListener('click', (event) => {
  let optionSelected = event.target.value;
  let directors = dataFilms.map(item => item.director)
  let listD = directors.filter((item, index) => {
    return directors.indexOf(item) === index;
  });
  let classActual = getByClass("infoMovies");
  listD.forEach((item, index) => {
    if (optionSelected == index) {
      let filterDirectors = filterByDirectorProducer(dataFilms, item, 'director')
      let newIdFilterD = filterDirectors.map(film => film.title);
      hidden_show_Class(classActual, newIdFilterD);
    }
  });
  enterInfoMovie(classActual);
});


listProducer.addEventListener('click', (event) => {
  let optionSelected = event.target.value;
  let producers = dataFilms.map(item => item.producer)
  let listP = producers.filter((item, index) => {
    return producers.indexOf(item) === index;
  });
  let classActual = getByClass("infoMovies");
  listP.forEach((item, index) => {
    if (optionSelected == index) {
      let filterProducer = filterByDirectorProducer(dataFilms, item, 'producer')
      let newIdFilterP = filterProducer.map(film => film.title);
      hidden_show_Class(classActual, newIdFilterP);
    }
  });
  enterInfoMovie(classActual);
});


/* Showing ordering of posters*/
sortBy.addEventListener('change', (event) => {
  const sortItemsValue = event.target.value;
  let classPoster = getByClass("infoMovies");
  let sortBy = sortData(dataNueva(classPoster), sortItemsValue);

  let ids=sortBy.map(item=>item.title);
  for(let i=0;i<ids.length;i++){
    let nodoEliminado=posters.removeChild(getById(ids[i]));
    posters.append(nodoEliminado);
  }
  enterInfoMovie(classPoster);
})

//Buscador de imagenes
searchMovie.addEventListener('keyup', (e) => {
  let classPoster = getByClass("infoMovies");
  let DataFilms = dataNueva(classPoster);
  let Datanew = searchData(DataFilms, "title", e.target.value);
  let newId = Datanew.map(film => film.title);
  hidden_show_Class(classPoster, newId);
  enterInfoMovie(classPoster);
})

/* Event to show Films and remove filmInfoSection*/
getById("buttonBackFilms").addEventListener('click', () => {
  filmInfoSection.style.display = "none";
  films.style.display = "block";
});

/* Creating event for filmInfoSection's logo */
getById("logoBackHome").addEventListener('click', () => {
  filmInfoSection.style.display = "none";
  home.style.display = "block";
});

/* Event to reload filter */
reloadFilter.addEventListener('click', () => {
  generalFunction(dataFilms, posters);
  films.style.display = "block";
  enterInfoMovie(getByClass("infoMovies"));
});

/* Event to close and open menuBtn (hamburger menu)*/
const menuBtn = document.querySelector(".menuBtn");
const menuItems = document.querySelector(".menuItems");
//main toggle
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

/* CHARTS STATISTICS */
getById("buttonBackFilms1").addEventListener('click', () => {
  Statistics.style.display = "none";
  generalFunction(dataFilms, posters);
  enterInfoMovie(getByClass("infoMovies"));
  films.style.display = "block";
});

getById("logoBackHome2").addEventListener('click', () => {
  Statistics.style.display = "none";
  home.style.display = "block";
});

navStatistics.addEventListener('click', () => {
  home.style.display = "none";
  Statistics.style.display = "block";
});