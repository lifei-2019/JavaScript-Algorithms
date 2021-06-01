/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */

 const canEat = function(candiesCount, queries) {
    const n = queries.length
    const ans = new Array(n)
    const m = candiesCount.length
    const sum = new Array(m+1).fill(0)
    for(let i=1;i<m+1;i++) sum[i] = sum[i-1]+candiesCount[i-1]
    for (let i = 0; i < n; i++) {
        let t =queries[i][0], d =queries[i][1] + 1, c =queries[i][2];
        let a = Math.floor(sum[t] / c) + 1, b = sum[t + 1];
        // console.log(a,d,b)
        ans[i] = a <= d && d <= b;
    }
    return ans;
};