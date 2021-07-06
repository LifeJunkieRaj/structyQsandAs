const compress = (s) => {
    compressed = [];
    let i = 0;
    let j = 0;
    while (j <= s.length) {
        if (s[i] === s[j]) {
            j += 1;
        } else {
            num = j - i;
            if (num == 1) {
                compressed.push(s[i]);
            } else {
                compressed.push(num, s[i]);

            }
            i = j;
        }

    }
    return compressed.join("");
};

// Note:
// n = length of string
// Time: O(n)
// Space: O(n)