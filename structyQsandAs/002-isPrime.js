const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true;
  };

  // Note:
  // n = input number
  // Time: O(sqrt(n))
  // Space: O(1)