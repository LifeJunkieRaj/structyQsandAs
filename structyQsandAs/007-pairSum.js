const pairSum = (numbers, targetSum) => {
  let halfPair = {};
  for (let i = 0; i <= numbers.length - 1; i++) {
        let num = numbers[i];
        const otherHalf = targetSum - num;
        if (otherHalf in halfPair) {
          return [i, halfPair[otherHalf]]
        }
    halfPair[num] = i
  }      
};

pairSum([3, 2, 5, 4, 1], 8) // [2, 0]

// Note: 
// n = length of array
// Time: O(n),
// Space: O(n)

