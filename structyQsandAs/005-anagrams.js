const anagrams = (s1, s2) => {
    let hashT = {};

    for (let char of s1) {
        if (!(char in hashT)) {
            hashT[char] = 0;
        }
        hashT[char] += 1;
    }
    for (let char of s2) {
        if (char in hashT) {
            hashT[char] -= 1;
        } else {
            return false;
        }

    }
    for (let char in hashT) {
        if (hashT[char] !== 0) {
            return false;
        }
    }
    return true;
};

// Note:
// n = length of s1
// m = length of s2
// Time: O(n + m)
// Space: O(n)

anagrams('abc', 'cba'); // true




































