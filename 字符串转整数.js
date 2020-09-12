/**
 * @param {string} str
 * @return {number}
 */
myAtoi = function(str) {
  const res = parseInt(str, 10)
  const min = -Math.pow(2,31)
  const max = Math.pow(2,31)
  if(res < min){
      return min
  } else if(res>= max) {
      return max - 1
  } else {
      return res
  }
};

// 上面在输入"words and 987"时输出NaN
// 这里要用到isNaN做判断，因为NaN=NaN会返回false

/**
 * @param {string} str
 * @return {number}
 */
myAtoi = function(str) {
  const res = parseInt(str, 10)
  const min = -Math.pow(2,31)
  const max = Math.pow(2,31)
  if(isNaN(res)){
      return 0
  }else if(res < min){
      return min
  } else if(res>= max) {
      return max - 1
  } else {
      return res
  }
};