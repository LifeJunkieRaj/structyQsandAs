// maxValue:
// We are given an array of numbers.  We need to search through each number of the array, identify the largest number, and then return it.
// We can't use built-in array methods and we can assume there are no empty input arrays.

// Sample input:
// input = [3, 6, 12, 8, 1, 9]
// Sample output:
// output = 12

function maxValue(nums) {
    // We can setup a maxNumber variable equal to -Infinity.
    let maxNumber = -Infinity;
    // We can iterate through the array using a for loop.
    for (let i = 0; i < nums.length; i++) {
        // We can setup a variable to identify the element of the index.
        let num = nums[i];
        // We can then make a conditional that compares the value of the element of the index to the maxNumber variable.
        if (num > maxNumber) {
            // If the element of the index is bigger than the maxNumber variable we will switch the maxNumber variable's value to the value of the current
            // element of the index. 
            maxNumber = num;
        }
    }
    // Once you've iterated through the whole array and switched out the maxNumber for each higher value of the element of the index you've found,
    // return the maxNumber variable
    return maxNumber
}

let nums = [3, 6, 9, 8, 1, 12]
console.log(maxValue(nums))

// n = length of array
// Time: O(n) 
// Space: O(1)