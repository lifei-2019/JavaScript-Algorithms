/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 const kthLargestValue = function(matrix, k) {
    let n = matrix.length
    if(!n) return;
    let s = matrix[0].length
    let dp = Array(n+1).fill(0).map(()=>Array(s+1).fill(0))
    let arr=[]
    for(let i=0; i<n; i++){
        for(let j=0;j<s;j++){
            dp[i+1][j+1]=matrix[i][j]^dp[i+1][j]^dp[i][j+1]^dp[i][j]
            arr.push(dp[i+1][j+1])
        }
    }
    return arr.sort((a,b)=>b-a)[k-1]
}