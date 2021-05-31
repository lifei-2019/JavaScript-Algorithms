/**
 * @param {number} n
 * @return {boolean}
 */

// 方法一 通过对数运算转换为4为底n为数字的一个对数，
// 因为js里计算是带小数点的，只要判断得到的是否为整数即可
 const isPowerOfFour = function(n) {
    const power = Math.log10(n)/Math.log10(4)
    return Number.isInteger(power)
};

// 方法二
// 4的幂如 0001、 0100、 10000 规律：在奇数位（索引从1开始）有且只有1个1
// 正数的任何次幂都是正数
const isPowerOfFour = function(n) {
    // 排除n为负数或n的二进制表示不止一个1的情况
    if (n < 0 || n & (n - 1)) { 
        return false;
    }
    // 检测奇数位是否是1（n & 0xaaaaaaaa 可检测偶数位是否为1）
    return n & 0x55555555 
}