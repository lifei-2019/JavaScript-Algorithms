/**
 * @param {number[]} piles
 * @return {boolean}
 */
 const stoneGame = function(piles) {
    const length = piles.length;
    const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
    for (let i = 0; i < length; i++) {
        dp[i][i] = piles[i];
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
        }
    }
    return dp[0][length - 1] > 0;



    // 一维数组动态优化
    const length = piles.length;
    const dp = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        dp[i] = piles[i];
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
        }
    }
    return dp[length - 1] > 0;
};