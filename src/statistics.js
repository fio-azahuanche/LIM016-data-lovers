import {  top10Movies } from './data.js';
import data from './data/ghibli/ghibli.js';
let dataFilms=data.films;
const getById = label => document.getElementById(label);
const addChart = (title, typeChart, labelsChart, legendShow, string)=>{
    const chart = getById(title).getContext('2d');
    const colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'orange','#C32BAD','#7027A0','#6ECB63','#3A6351','#1E3163', '#C84B31'];
    //eslint-disable-next-line
    const charts = new Chart(chart,{
      type: typeChart,
      data: {
        labels: labelsChart[0],
        datasets: [{
          label: string,
          data: labelsChart[1],
          backgroundColor: colors,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1.5,
          hoverOffset: 4
        }],
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: title.toUpperCase(),
            font: {
              size: 30
            }
          },
          legend: {
            position: 'right',
            display: legendShow
          }
        },
        responsive: true,
      }
    })
  }

  const dataLabelToChart = (data, topic, labels) => {
    let dataChart = [];
    for (let i = 0; i < data.length; i++) {
      dataChart[i] = data[i].people.map(item => item[topic]);
    }
    let arrayLabel=labels;
    let arrayConcat = dataChart.reduce((a, b) => a.concat(b));
    let amountByLabel = [];
    for (let i = 0; i < arrayLabel.length - 1; i++) {
      amountByLabel[i] = arrayConcat.filter(item => item == arrayLabel[i]).length;
    }
    let sum = amountByLabel.reduce((a, b) => a + b);
    amountByLabel[arrayLabel.length - 1] = arrayConcat.length - sum;
    return [arrayLabel, amountByLabel]
  }

  const genresMovie = (data) => {
    let genres = data.map(item => item.genres);
    let arrayGenres = [], countGenres = [];
    genres.forEach((item,index)=>arrayGenres[index] = item.split(" "));
    let genresConcat = arrayGenres.reduce((a, b) => a.concat(b));
    let types = genresConcat.filter((item, index) => genresConcat.indexOf(item) === index);
    types.forEach((element,index)=>countGenres[index] = genresConcat.filter(item => item == element).length);
    return [types, countGenres];
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    let species = ['Human', 'Cat', 'Raccoon Dog', 'Spirit', 'Deity, Dragon', 'Totoro', 'Witch', 'Borrower', 'Others'];
    let gender = ['Female', 'Male', 'Others'];
    addChart('gender', 'pie', dataLabelToChart(dataFilms, 'gender', gender),true, " amount");
    addChart('specie', 'doughnut', dataLabelToChart(dataFilms, 'specie', species),true, " amount");
    addChart('top10', 'line', top10Movies(dataFilms),false, " score");
    addChart('Genres', 'bar', genresMovie(dataFilms),false, " amount");
  });
