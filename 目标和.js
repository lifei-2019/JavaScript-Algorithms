/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// sum(P) 前面符号为+的集合；sum(N) 前面符号为减号的集合
// 所以题目可以转化为
// sum(P) - sum(N) = target 
// => sum(nums) + sum(P) - sum(N) = target + sum(nums)
// => 2 * sum(P) = target + sum(nums) 
// => sum(P) = (target + sum(nums)) / 2
 const findTargetSumWays = function(nums, target) {
    let sum = 0
    for(let num of nums){
        sum+= num
    }
    if(sum<target||(sum+target)%2 == 1){
        return 0
    }
    let w =(sum+target)/2
    let dp=new Array(w+1).fill(0)
    dp[0]=1
    for(let num of nums){
        for(let i=w;i>=num;i--){
            dp[i]+=dp[i-sum]
        }
    }
};