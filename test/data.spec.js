import { filterByDirectorProducer, sortData, searchFilms } from '../src/data.js';


describe('filterByDirectorProducer', () => {
  it('is a function', () => {
    expect(typeof filterByDirectorProducer).toBe('function');
  });
  const dataPrueba = [{ director: "Yoshifumi Kondō", title: "Whisper of the Heart",producer:"Yumari Cruz" }, { director: "Hayao Miyazaki", title: "Castle in the Sky",producer:"Fiorela Azahuanche" }];
  it("return `Yoshifumi Kondō`", () => {
    expect(filterByDirectorProducer(dataPrueba, `Yoshifumi Kondō`, `director`)).toEqual([
      { director: "Yoshifumi Kondō", title: "Whisper of the Heart",producer:"Yumari Cruz"  }
    ]);

  });
  it("return `Yumari Cruz`", () => {
    expect(filterByDirectorProducer(dataPrueba, `Yumari Cruz`, `producer`)).toEqual([
      { director: "Yoshifumi Kondō", title: "Whisper of the Heart",producer:"Yumari Cruz"  }
    ]);

  });
  it('returns `default:break`', () => {
    expect(filterByDirectorProducer(dataPrueba,`otronombre`,`otherCases`)).toEqual(undefined);
  }); 
});




describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  const dataPrueba = [{title: "Whisper of the Heart",rt_score:85,release_date:1995}, {  title: "Castle in the Sky", rt_score:100, release_date:2000}];
   
  
  it('returns `Tu pelicula es buena`', () => {
    expect(sortData(dataPrueba,`score`)).toEqual([{"rt_score": 100, "title": "Castle in the Sky","release_date":2000}, { "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}]);
  }); 



  it('returns `year Ascending`', () => {
    expect(sortData(dataPrueba,`yearAscending`)).toEqual([{ "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}, {"rt_score": 100, "title": "Castle in the Sky","release_date":2000}]);
  }); 

  it('returns `year Desc`', () => {
    expect(sortData(dataPrueba,`yearDescending`)).toEqual([{"rt_score": 100, "title": "Castle in the Sky","release_date":2000},{ "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}]);
  }); 
  
  
  it('returns `default:break`', () => {
    expect(sortData(dataPrueba,`otherCases`)).toEqual(undefined);
  }); 



  it('returns `a-z`', () => {
    expect(sortData(dataPrueba,`a-to-z`)).toEqual([{"rt_score": 100, "title": "Castle in the Sky","release_date":2000}, { "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}]);
  }); 
  it('returns `a-z`', () => {
    const sameTitle=[{title:"b"},{title:"a"}]
    expect(sortData(sameTitle,`a-to-z`)).toEqual([{"title":"a"},{"title":"b"}]);
  }); 
  it('returns `a-z`', () => {
    const sameTitle=[{title:"Cs"},{title:"Cs"}]
    expect(sortData(sameTitle,`a-to-z`)).toEqual([{"title":"Cs"},{"title":"Cs"}]);
  }); 



  it('returns `z-a`', () => {
    expect(sortData(dataPrueba,`z-to-a`)).toEqual([{ "rt_score": 85, "title": "Whisper of the Heart","release_date":1995},{"rt_score": 100, "title": "Castle in the Sky","release_date":2000}]);
  }); 
  it('returns `z-a`', () => {
    const sameTitle=[{title:"b"},{title:"a"}]
    expect(sortData(sameTitle,`z-to-a`)).toEqual([{"title":"b"},{"title":"a"}]);
  }); 
  it('returns `z-a`', () => {
    const sameTitle=[{title:"Cs"},{title:"Cs"}]
    expect(sortData(sameTitle,`z-to-a`)).toEqual([{"title":"Cs"},{"title":"Cs"}]);
  }); 


});








describe('searchFilms', () => {
  it('is a function', () => {
    expect(typeof searchFilms).toBe('function');
  });

});
