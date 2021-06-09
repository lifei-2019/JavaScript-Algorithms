/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
 const profitableSchemes = function(n, minProfit, group, profit) {
    // 新建(n+1)*(m+1)的二维数组
    const dp = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0));
    // 赋值dp[i][0]=1
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }
    // 定义数组长度&取模
    const len = group.length, MOD = 1e9 + 7;
    for (let i = 1; i <= len; i++) {
        // 每个循环里 定义成员为members，利润为earn
        const members = group[i - 1], earn = profit[i - 1];
        // 当员工数大于上层循环里的members时，进入此循环
        for (let j = n; j >= members; j--) {
            // 当给定的最小利润大于0时，减一循环
            for (let k = minProfit; k >= 0; k--) {
                dp[j][k] = (dp[j][k] + dp[j - members][Math.max(0, k - earn)]) % MOD;
            }
        }
    }
    return dp[n][minProfit];
};