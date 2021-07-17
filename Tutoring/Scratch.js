function main(nums) {
    let newNums = [];
    let addOrigin = 0;
    
    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i];
        addOrigin += num;
        if (num % 2 === 0) {
            newNums.push(num + i);
        } else {
            newNums.push(num - i);
        }

    }
    let addModified = 0;
    for (let j = 0; j <= newNums.length - 1; j++) {
        let value = newNums[j];
        addModified += value;
    }
    console.log(newNums)
    console.log(addOrigin)
    return addModified
}

console.log(main([5,15,23,56,35]));


