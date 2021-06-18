/**
 * @param {string} n
 * @return {string}
 */
 const smallestGoodBase = function (n) {
    let ans = BigInt(n) - BigInt(1)
    for (let s = 59; s >= 2; s--) {
      const k = BigInt(Math.floor(Math.pow(n, 1 / s)))
      if (k > 1) {
        let sum = BigInt(1)
        let mul = BigInt(1)
        for (let i = 1; i <= s; i++) {
          mul *= k
          sum += mul
        }
        if (sum === BigInt(n)) {
          ans = k
          break
        }
      }
    }
  
    return ans + ''
  }