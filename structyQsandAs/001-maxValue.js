const maxValue = (nums) => {
    let max = -Infinity;
    for (let i = 0; i < array.length - 1; i++) {
        let maxest = nums[i]
        if (maxest > max)
            max = maxest;
    }
    return max;
};

// Note: 
// n = length of array
// Time: O(n)
// Space: O(1)