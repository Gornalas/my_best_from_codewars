function findUniq(arr){
    let template;
  
    //looking for a non-unique variable.
    for (i = 0; i < arr.length; ++i){
        if (arr[i] === arr[i + 1]){
            template = arr[i];
            break;
        }
    }
  
    if (isNaN(template)){
      for (i = 0; i < arr.length; ++i){
        if (!(isNaN(arr[i]))) return arr[i];
      }
    }
  
    for (i = 0; i < arr.length; ++i){
        if (arr[i] !== template) {
          return arr[i];
        }
    }
};

/*TestCase from CodeWars
require('mocha');

describe('findUniq', () => {
  it('should pass sample tests', () => {
    Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]),2);
    Test.assertEquals(findUniq([ 0, 0, 0.55, 0, 0 ]),0.55);
  });

  it('should pass basic tests', () => {
    // Basic tests (shuffled)
    Test.assertEquals(findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]),3);
    Test.assertEquals(findUniq([ 5, 5, 5, 5, 4, 5, 5, 5 ]),4);
    Test.assertEquals(findUniq([ 6, 6, 6, 6, 6, 5, 6, 6 ]),5);
    Test.assertEquals(findUniq([ 7, 7, 7, 7, 7, 7, 6, 7 ]),6);
    // The last item
    Test.assertEquals(findUniq([ 8, 8, 8, 8, 8, 8, 8, 7 ]),7);
    Test.assertEquals(findUniq([ 3, 3, 2, 3, 3, 3, 3, 3 ]),2);
    Test.assertEquals(findUniq([ 2, 1, 2, 2, 2, 2, 2, 2 ]),1);
    // The first item
    Test.assertEquals(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]),0);
  });
  
  it('should work with different types', () => {
    // String in numbers
    Test.assertEquals(
      findUniq(generateTestArr('1', 1, 1000)) , '1',
      'string in numbers'
    );
  
    // Zero and strings
    Test.assertEquals(
      findUniq(generateTestArr(0, '', 1000)) , 0,
      'zero in empty strings'
    );
    
    // False and zero
    Test.assertEquals(
      findUniq(generateTestArr(false, 0, 1000)) , false,
      'false in zeros'
    );
    
    // Undefined and false
    Test.assertEquals(
      findUniq(generateTestArr(false, undefined, 1000)) , false,
      'false in undefined'
    );
    
    // null and undefined
    Test.assertEquals(
      findUniq(generateTestArr(undefined, null, 1000)) , undefined,
      'null in undefined'
    );
    
    // undefined and strings
    Test.assertEquals(
      findUniq(generateTestArr('undefined', undefined, 1000)) , 'undefined',
      'undefined in strings'
    );
    
  });
  
  it('should find object in arrays', () => {
    let a = {};
    let b = [];
    Test.assertEquals(
      findUniq(generateTestArr(a, b, 100)) , a
    );
  });

  it('should find object in other objects', () => {
    let a = {};
    let b = {};
    Test.assertEquals(
      findUniq(generateTestArr(a, b, 100)) , a
    );
  });

  // Random numbers in very long array
  it('should find random numbers in very long array', () => {
    let a = Math.random();
    let b = Math.random();
    Test.assertEquals(
      findUniq(generateTestArr(a, b, Math.pow(2, 20))) , a
    );
  });

  it('should solve some puzzle', () => {
    Test.expect(
      Number.isNaN(findUniq(generateTestArr(NaN, Math.PI, 2016)))
    );
    
    let a = Math.random();
    Test.assertEquals(
      findUniq(generateTestArr(a, NaN, Math.pow(2, 24))), a
    );
  });

  function generateTestArr(answer, mass, length) {
    let arr = [];
    // Generate random integer in [0, length)
    let answerIndex = Math.floor(Math.random() * length);
    
    // Fill the array with mass and answer
    for (let i = 0; i < length; i++) {
      // Answer will be on answerIndex
      arr.push(i === answerIndex ? answer : mass);
    }
    
    return arr;
  }
  
});
*/
