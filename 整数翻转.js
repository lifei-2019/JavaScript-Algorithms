// 可以用把数字型转化成字符串，此处优先想怎么在不改变数据类型前提下完成。

/**
 * @param {number} x
 * @return {number}
 */
reverse = function(x) {
  let res = 0
  while(x !== 0) {
      res = res*10 + x%10
      x=Math.floor(x/10)
  }
  return res
};

// 一开始想的是上面这种写法，但是发现负数时候不成立，可以用到之前用到的位运算

/**
 * @param {number} x
 * @return {number}
 */
reverse1 = function(x) {
  let res = 0;
  while(x !== 0) {
      res = res * 10 + x % 10;
      x = (x / 10) | 0;
  }
  return res
}

// 发现还是不行，当数字超过2的32次方-1之后仍会返回翻转后的数据而不是0
// 膜拜大佬的写法，还是对位运算理解太少

/**
 * @param {number} x
 * @return {number}
 */
reverse2 = function(x) {
  let res = 0;
  while(x !== 0) {
      res = res * 10 + x % 10;
      x = (x / 10) | 0;
  }
  // 此处是为了限制32位数
  return (res | 0) === res ? res : 0;
}