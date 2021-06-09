/**
 * @param {number[]} stones
 * @return {number}
 */
 const lastStoneWeightII = function(stones) {
    let sum = 0
    for(const x of stones){
        sum+= x
    }
    const mid = Math.floor(sum/2)
    const dp = new Array(mid+1).fill(false)
    dp[0]=true
    for(const x of stones){
        for(let i=mid;i>=x;i--){
            dp[i]=dp[i]||dp[i-x]
        }
    }
    for (let j = mid;; --j) {
        if (dp[j]) {
            return sum - 2 * j;
        }
    }
};