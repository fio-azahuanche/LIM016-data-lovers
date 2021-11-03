// estas funciones son de ejemplo

export const filterByDirectorProducer = (data, condition) => {
  return data.filter(film => film.director === condition || film.producer === condition);
};

export const sortData = (data, items) =>{
  switch(items){
    case 'score':{
      const rate = data.sort((a, b) => (b.rt_score - a.rt_score));
      return rate;
    }
    case 'yearDescending':{
      const yearDesc = data.sort((a, b) => (b.release_date - a.release_date));
      return yearDesc;
    }
    case 'yearAscending':{
      const yearAsc = data.sort((a, b) => (a.release_date - b.release_date));
      return yearAsc;
    }
    case 'a-to-z':{
      const fromAtoZ = data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
        })
      return fromAtoZ;
    }
    case 'z-to-a':{
      const fromZtoA = data.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
        })
      return fromZtoA;
    }
    default:{
      break;
    }
  }
};


export const searchFilms = (input, selector) => {
  document.addEventListener('keyup', (e) => {
    if (e.target.matches(input)) {
      console.log(e.target.value);
      document.querySelectorAll(selector).forEach((el) => el.getAttribute('id').toLowerCase().includes(e.target.value) ? el.classList.remove('filter') : el.classList.add('filter'))
    }
  })

};
export const anotherExample = () => {
  return 'OMG';
};
