import { filterByDirectorProducer, anotherExample } from '../src/data.js';


describe('filterByDirectorProducer', () => {
  it('is a function', () => {
    expect(typeof filterByDirectorProducer).toBe('function');
  });

  /* it('returns ``', () => {
    expect(filterByDirectorProducer()).toBe('filterByDirectorProducer');
  }); */
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
