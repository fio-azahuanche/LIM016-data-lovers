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

  div.innerHTML=`<img src=${group.poster}>`

  let divDescription = document.createElement("div");
  divDescription.setAttribute('id', 'filmDescription');

  divDescription.innerHTML=`<h1>${group.title}</h1>
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
  let directors = data.films.map(item=>item.director)
  let listD = directors.filter((item,index)=>{
    return directors.indexOf(item) === index;
  });
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
  let producers = data.films.map(item=>item.producer)
  let listP = producers.filter((item,index)=>{
    return producers.indexOf(item) === index;
  });
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




/* CHARTS STATISTICS */
getById("buttonBackFilms1").addEventListener('click', () => {
  getById("Statistics").style.display = "none";
  generalFunction(data.films, getById("posters"));
  enterInfoMovie(getByClass("infoMovies"));
  getById("Films").style.display = "block";
});

getById("logoBackHome2").addEventListener('click', ()=>{
  getById("Statistics").style.display = "none";
  getById("Home").style.display = "block";
});

nav[2].addEventListener('click', () => {
  getById("Home").style.display = "none";
  getById("Statistics").style.display = "block";

  let scores=data.films.map(item=>[item.title,item.rt_score]);
  scores.sort((a,b)=>{ return b[1]-a[1]});
  let movies10=[], scores10=[];
  for(let i=0;i<10;i++){
  movies10[i]=scores[i][0];
  scores10[i]=scores[i][1];
  }
  /* let movieScore = sortData(data.films,"score");
  let top10movie = [];
  for(let i=0; i<10; i++){
    top10movie[i]=movieScore[i];
  } */

  const lineChart = getById('top10').getContext('2d');
  const top10 = new Chart(lineChart, {
    type: 'line',
    data: {
        //labels: top10movie.map(item=>item.title),
        labels:movies10,
        datasets: [{
            label: ' Score',
            data:scores10,
            //data: top10movie.map(item=>parseInt(item.rt_score)),
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        }
      },
      plugins:{
        title: {
          display: true,
          text: 'Top 10',
          font:{
            size: 30
          }
        }
      }
    }
  });

  let dataGender = [];
  for(let i=0; i<data.films.length; i++){
   dataGender[i] = data.films[i].people.map(item=>item.gender);
  }
  let dataConcat = dataGender.reduce((a,b)=>a.concat(b));
  let female=dataConcat.filter(item=>item=="Female").length;
  let male=dataConcat.filter(item=>item=="Male").length;
  const pieChart = getById('gender').getContext('2d');
  const gender = new Chart(pieChart, {
    type: 'pie',
    data : {
      labels: [
        'Female',
        'Male','Others'
      ],
      datasets: [{
        label: 'Amount',
        data: [female,male,dataConcat.length-female-male],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'orange'
        ],
        hoverOffset: 4
      }]
    },
    options:{
      plugins:{
        title: {
          display: true,
          text: 'Average Gender',
          font:{
            size: 30
          }
        },
        legend:{
          position: 'right'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });

  let genres = data.films.map(item=>item.genres);
  let arrayGenres= [];
  for(let i=0; i<genres.length; i++){
    arrayGenres[i]=genres[i].split(" ");
  }
  let genresConcat = arrayGenres.reduce((a,b)=>a.concat(b));
  let types = genresConcat.filter((item,index)=>{
    return genresConcat.indexOf(item) === index;
  });
  let countGenres =[];
  for(let i=0; i<types.length; i++){
    countGenres[i]=genresConcat.filter(item=>item==types[i]).length;
  }

  const barChart = document.getElementById('Genres').getContext('2d');
  const Genres = new Chart(barChart, {
    type: 'bar',
    data : {
      labels: types,
      datasets: [{
        label: 'Amount',
        data: countGenres,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'orange',
          'yellow',
          'purple',
          'green',
          'red',
          'pink',
          'brown'
        ],
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }]
    },
    options:{
      plugins:{
        title: {
          display: true,
          text: 'Average Genres',
          font:{
            size: 30
          }
        }
      },
      responsive: true,
    }
  });

  let dataSpecie = [];
  for(let i=0; i<data.films.length; i++){
   dataSpecie[i] = data.films[i].people.map(item=>item.specie);
  }
  let species = ['Human', 'Cat', 'Raccoon Dog', 'Spirit', 'Deity, Dragon', 'Totoro','Witch','Borrower', 'Others'];
  let speciesConcat = dataSpecie.reduce((a,b)=>a.concat(b));
  let arraySpecies = [];
  for(let i=0; i<species.length-1; i++){
    arraySpecies[i]=speciesConcat.filter(item=>item==species[i]).length;
  }
  let sumSpecies = arraySpecies.reduce((a,b)=>a+b);
  arraySpecies[8] = speciesConcat.length - sumSpecies;

  const donutChart = document.getElementById('specie').getContext('2d');
  const specie = new Chart(donutChart, {
    type: 'doughnut',
    data : {
      labels: species,
      datasets: [{
        label: 'Dataset of Species',
        data: arraySpecies,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'orange',
          'yellow',
          'purple',
          'green',
          'red',
          'pink',
          'brown'
        ],
        hoverOffset: 4
      }]
    },
    options:{
      plugins:{
        title: {
          display: true,
          text: 'Average number of species',
          font:{
            size: 30
          }
        },
        legend:{
          position: 'right'
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
});
