/* import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
}); */

let haiku; import HaikuChecker from './../src/haikuChecker.js';


describe('HaikuChecker', () => {
  let haiku;

  beforeEach(() => {
    haiku = `A world of dew,

        And within every dewdrop
        
        A world of struggle.`;
  });

  test('should define HaikuChecker constructor', () => {
    let haikuChecker = new HaikuChecker(haiku);
    expect(haikuChecker.haiku).toBe(haiku);
  });

  test('Should return true for a poem with 3 lines', () => {
    let haikuChecker = new HaikuChecker(haiku);
    expect(haikuChecker.isThreeLines()).toBe(true);
  });
});