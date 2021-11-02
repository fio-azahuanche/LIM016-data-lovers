// estas funciones son de ejemplo

export const filterDataByDirectorProducer = (data, condition) => {
  return data.filter(film => film.director === condition || film.producer === condition);
};

export const anotherExample = () => {
  return 'OMG';
};
