module.exports = () => {
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
  
  
  function firstRecurringCharacter(input) {
    let indexDistanceMap = [];
    
    input.forEach((value, index) => {
      let data = {
        index: index,
        distance: null
      };
      
      for (let i = index + 1; i <= input.length - 1; i++) {
        
        if (input[i] === value) {
          data.distance = i - index - 1;
          break;
        }
      }
      indexDistanceMap.push(data);
    });
    let indexOfFirstPair = indexDistanceMap.filter((data => data.distance !== null)).sort((a, b) => a.distance - b.distance)[0]?.index;
    return input[indexOfFirstPair] ? input[indexOfFirstPair] : undefined;
  }
  
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let value of input) {
      if (map[value] !== undefined) {
        return value;
      }
      map[value] = value;
    }
  }
  
  // console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
  console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
  // console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
  console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
  // console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
  console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
  // console.log(firstRecurringCharacter([2, 3, 4, 5]));
  console.log(firstRecurringCharacter2([2, 3, 4, 5]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

};