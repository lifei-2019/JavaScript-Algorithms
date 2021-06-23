/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 正则表达式
const hammingWeight = function(n) {
    return (n.toString(2).match(/1/g)||'').length
};

// 位运算 把每个1变成0
const hammingWeight1 = function(n) {
    let res =0
    while(n!=0){
        n&=n-1
        res++
    }
    return res
}

//右统计 然后>>>位移
const hammingWeight1 = function(n) {
    let res =0
    while(n!=0){
        res+=(n&1)
        n>>>1
    }
    return res
}
