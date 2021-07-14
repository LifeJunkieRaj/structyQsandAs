const pairProduct = (numbers, targetProduct) => {
    let hashTable = {};
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
       let pair = targetProduct/num
       if (pair in hashTable) {
            return [i, hashTable[pair]]
       }
      hashTable[num] = i
    }
  };
  
  console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
  console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]

// n = length of array
// Time: O(n)
// Space: O(n)