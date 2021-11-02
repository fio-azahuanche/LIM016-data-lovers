// estas funciones son de ejemplo

export const filterByDirectorProducer = (data, condition) => {
  return data.filter(film => film.director === condition || film.producer === condition);
};

export const sortScore = (data, items) => {
  //sort score in descending order (highest to lowest)
  const score = data.sort((a, b) => (parseInt(b[items]) - parseInt(a[items])));
  return score;
};

export const sortYearDesc = (data, items) => {
  //sort year in descending order (highest to lowest)
  const yearDesc = data.sort((a, b) => (parseInt(b[items]) - parseInt(a[items])));
  return yearDesc;
};

export const sortYearAsc = (data, items) => {
  //sort year in ascending order (lowest to highest)
  const yearAsc = data.sort((a, b) => (parseInt(a[items]) - parseInt(b[items])));
  return yearAsc;
};

export const sortByTitle = {
  fromAtoZ: (data,items) => {
    const fromAtoZ = data.sort((a, b) => {
      if (a[items] < b[items]) {
        return -1;
      }
      if (a[items] > b[items]) {
        return 1;
      }
      return 0;
    })
    return fromAtoZ;
  },
  fromZtoA : (data,items) => {
    const fromZtoA = data.sort((a, b) => {
      if (a[items] < b[items]) {
        return 1;
      }
      if (a[items] > b[items]) {
        return -1;
      }
      return 0;
    })
    return fromZtoA;
  }
};
/* export const sortZtoA = (data) => {
  //falta algo
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
}; */

export const anotherExample = () => {
  return 'OMG';
};
