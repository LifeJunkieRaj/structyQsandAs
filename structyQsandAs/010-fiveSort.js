// If given an array of integers,
// for example [3,8,5,2,5,6,9,4,1,2], you would want the output to be a sorted array with all the fives at the end of the array like so:
// [3,8,2,6,9,4,1,2,5,5]
//
// 1. I would first create two pointers i (pointing at the first indext in nums 
// and j (pointing at the last index in nums).
// 2. I would then iterate from the beginning of the array with i and decrement from the back of the array with j.
// 3. I would then create a while loop where i less than or equal to j.
// 4. I would create a conditional statement where we check if the element at j is five.
// 5. If it is we decrement and if it is not, we stop there.
// 6. If it isn't we increment and if it is, we swap the elements at i and j.
// 7. We continue this process until i and j meet
// 7. We then return the array nums.

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
            i++;
        } else {
            i++;
        }
    }
    return nums;
}

// n = array size (
// Time: O(n )
// Space: O(1)