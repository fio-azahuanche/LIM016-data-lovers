import { filterByDirectorProducer, sortData,searchData } from './data.js';
import data from './data/ghibli/ghibli.js';

const getById = label => document.getElementById(label);
const getByClass = label => document.getElementsByClassName(label);

/* Creating General Function for containers*/
const generalFunction = (posterMovies, container) => {
  container.innerHTML = "";
  let div = [], imagenPoster = [], year = [], score = [], star = [], tag = [], divTitle=[];
    posterMovies.forEach((item,i)=>{
      div[i] = document.createElement("div");
      div[i].classList.add("infoMovies");
      div[i].setAttribute('id', item.title);
      divTitle[i] = document.createElement("div");
      divTitle[i].textContent=item.title;

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
  let txtDirector = document.createElement("span");
  txtDirector.innerHTML = `<img src="pictures/director.png"> <b>Director:</b> ${group.director}`;
  directorFilm.appendChild(txtDirector);

  let producerFilm = document.createElement("div");
  let txtProducer = document.createElement("span");
  txtProducer.innerHTML = `<img src="pictures/producer.png"> <b>Producer:</b> ${group.producer}`;
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
  group.forEach((item)=>{
    let div=document.createElement("div");
    div.innerHTML=`<img src="${item.img}"><div>${item.name.split(" ")[0]}</div>`
    
    div.classList.add(className);
    div.setAttribute('id', item.name);

    container.append(div);
  })
};

const card = (element,item) => {
  getById("cardEachCharacter").innerHTML = "";
  let bttnCloseModal=document.createElement("button");
  bttnCloseModal.innerHTML=`<img src="pictures/x-bold 1.png">`;
  bttnCloseModal.setAttribute('id','closeModal');


  let divImgCard = document.createElement("div");
  divImgCard.innerHTML=`<img src="${element.img}">`
  divImgCard.classList.add("imgCardModal");
  

  let divDetallesGrid=document.createElement("div");
  divDetallesGrid.classList.add("detailsCardModal");
  switch(item){
    case 'people':{
      divDetallesGrid.innerHTML=`<h1>${element.name}</h1><br>
      <div class="box1P"><b>Gender:</b><br> ${element.gender}</div>
      <div class="box2P"><b>Age:</b><br> ${element.age}</div>
      <div class="box3P"><b>Eye Color:</b><br> ${element.eye_color}</div>
      <div class="box4P"><b>Hair color:</b><br> ${element.hair_color}</div>
      <div class="box5P"><b>Specie:</b><br> ${element.specie}</div>`
      break;
    }

    case 'locations':{
      divDetallesGrid.innerHTML=`<h1>${element.name}</h1><br>
      <div class="box1L"><b>Climate:</b><br> ${element.climate}</div>
      <div class="box2L"><b>Terrain:</b><br> ${element.terrain}</div>
      <div class="box3L"><b>Surface water:</b><br> ${element.surface_water}</div>
      <div class="box4L"><b>Residents:</b><br> ${element.residents}</div>`
      break;
    }

    case 'vehicles':{
      divDetallesGrid.innerHTML=`<h1>${element.name}</h1><br>
      <div class="box1V"><b>Description:</b><br> ${element.description}</div>
      <div class="box2V"><b>Vehicle class:</b><br> ${element.vehicle_class}</div>
      <div class="box3V"><b>Length:</b><br> ${element.length}</div>
      <div class="box4V"><b>Pilot:</b><br> ${element.pilot.name}</div>`
     
      break;
    }
  }
  getById("cardEachCharacter").appendChild(bttnCloseModal);
  getById("cardEachCharacter").appendChild(divImgCard);
  getById("cardEachCharacter").appendChild(divDetallesGrid);
  getById("closeModal").addEventListener('click',()=>{
    getById("cardModal").style.display="none";
  })
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
      getById("cardModal").style.display = "block";

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
nav[1].addEventListener('click', () => {
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

/* Event to reload filter */
getById("reload").addEventListener('click', ()=>{
  generalFunction(data.films, getById("posters"));
  getById("Films").style.display = "block";
  enterInfoMovie(getByClass("infoMovies"));
});

/* Event to close and open menuBtn (hamburger menu)*/
const menuBtn = document.querySelector(".menuBtn");
const menuItems = document.querySelector(".menuItems");
//main toggle
menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

