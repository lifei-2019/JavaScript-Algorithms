/**
 * @param {number} n
 * @return {number}
 */
 const numSquares = function(n) {
    const f = new Array(n+1).fill(Infinity)
    f[0]=0
    for(let i=1;i*i<=n;i++){
        let x=i*i
        for(let j=x;j<=n;j++){
            f[j]=Math.min(f[j],f[j-x]+1)
        }
    }
    return f[n]
};