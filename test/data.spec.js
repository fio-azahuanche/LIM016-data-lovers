import { filterByDirectorProducer, sortData, searchData, top10Movies } from '../src/data.js';


describe('filterByDirectorProducer', () => {
  it('is a function', () => {
    expect(typeof filterByDirectorProducer).toBe('function');
  });
  const testData = [{ director: "Yoshifumi Kondō", title: "Whisper of the Heart", producer: "Yumari Cruz" }, { director: "Hayao Miyazaki", title: "Castle in the Sky", producer: "Fiorela Azahuanche" }];
  it('should return the filter result for the director `Yoshifumi Kondō`', () => {
    expect(filterByDirectorProducer(testData, `Yoshifumi Kondō`, `director`)).toEqual([
      { director: "Yoshifumi Kondō", title: "Whisper of the Heart", producer: "Yumari Cruz"}
    ]);

  });
  it('should return the filter result for the producer `Yumari Cruz`', () => {
    expect(filterByDirectorProducer(testData, `Yumari Cruz`, `producer`)).toEqual([
      { director: "Yoshifumi Kondō", title: "Whisper of the Heart", producer:"Yumari Cruz"}
    ]);

  });
  it('returns `default:break`', () => {
    expect(filterByDirectorProducer(testData,`otherNames`,`otherCases`)).toEqual(undefined);
  });
});




describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  const testData = [{title: "Whisper of the Heart",rt_score:85,release_date:1995}, {  title: "Castle in the Sky", rt_score:100, release_date:2000}];


  it('should return the score result for the film `Castle in the Sky`', () => {
    expect(sortData(testData,`score`)).toEqual([{"rt_score": 100, "title": "Castle in the Sky","release_date":2000}, { "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}]);
  });



  it('should return the result of the year ascending for the films', () => {
    expect(sortData(testData,`yearAscending`)).toEqual([{ "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}, {"rt_score": 100, "title": "Castle in the Sky","release_date":2000}]);
  });

  it('should return the result of the year descending for the films', () => {
    expect(sortData(testData,`yearDescending`)).toEqual([{"rt_score": 100, "title": "Castle in the Sky","release_date":2000},{ "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}]);
  });


  it('returns `default:break`', () => {
    expect(sortData(testData,`otherCases`)).toEqual(undefined);
  });



  it('returns `a-z`', () => {
    expect(sortData(testData,`a-to-z`)).toEqual([{"rt_score": 100, "title": "Castle in the Sky","release_date":2000}, { "rt_score": 85, "title": "Whisper of the Heart","release_date":1995}]);
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
    expect(sortData(testData,`z-to-a`)).toEqual([{ "rt_score": 85, "title": "Whisper of the Heart","release_date":1995},{"rt_score": 100, "title": "Castle in the Sky","release_date":2000}]);
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


describe('searchData', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });
  const dataPrueba = [{title: "Whisper of the Heart",rt_score:85,release_date:1995}, {  title: "Castle in the Sky", rt_score:100, release_date:2000}];
  it('return Lo buscado title',()=>{
    expect(searchData(dataPrueba,`title`,`whisper`)).toEqual([{"title": "Whisper of the Heart","rt_score":85,"release_date":1995}])
  })
});

describe('top10Movies', () => {
  it('is a function', () => {
    expect(typeof top10Movies).toBe('function');
  });
  const testData = [{title: "title1",rt_score:99}, {title: "title2",rt_score:100}, {title: "title3",rt_score:98}, {title: "title4",rt_score:97},{title: "title5",rt_score:95}, {title: "title6", rt_score: 96}, {title: "title7",rt_score:94},{title: "title8",rt_score:93},{title: "title9",rt_score:92},{title: "title10",rt_score:91}];
  it('should return the result of the ten best films', () => {
    expect(top10Movies(testData)).toEqual([["title2","title1","title3", "title4","title6","title5","title7","title8","title9","title10"],[100,99,98,97,96,95,94,93,92,91]]);
  });
});
