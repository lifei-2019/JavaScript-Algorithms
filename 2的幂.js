/**
 * @param {number} n
 * @return {boolean}
 */
// 如果是2的幂，首位为1且后面都为0
 const isPowerOfTwo = function(n) {
    return n > 0 & (n & (n-1)) == 0 
   };