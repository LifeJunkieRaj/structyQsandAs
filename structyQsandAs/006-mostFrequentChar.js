// My Solution:
const mostFrequentChar = (s) => {
    let count = {};
    for (let char of s) {
      if (!(char in count)) {
            count[char] = 0;
      }
      count[char] += 1;
    }
    let hiCount = null;
    let hiChar = null;
    for (let char in count) {
      if (count[char] > hiCount) {
          hiCount = count[char];
          hiChar = char
      }
    }
    return hiChar;
  };

  //Alvin's Solution:
  const mostFrequentChar = (s) => {
    let count = {};
    for (let char of s) {
      if (!(char in count)) {
            count[char] = 0;
      }
      count[char] += 1;
    }
    let hiChar = null;
    for (let char of s) {
      if (hiChar === null || count[char] > count[hiChar]) {
          hiChar = char
      }
    }
    return hiChar;
  };

  // Note: 
  // Time: O(n)
  // Space: O(n)