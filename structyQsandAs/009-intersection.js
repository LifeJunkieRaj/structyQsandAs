const intersection = (a, b) => {
    let finalResult = [];
    let items = new Set();
    for (let item of a) {
          items.add(item)
      }
    for (let el of b) {
      if (items.has(el)) {
        finalResult.push(el)
      }
    }
    return finalResult;
  };

  intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
  intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
  intersection([1,2,3,4], [1,2,3,4]) // -> [1,2,3,4] 