/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  // 状态定义 dp[x][y] => 猜从 x -> y 要的最小代价
  let dp = Array.from(new Array(n + 1), ()=> new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  // 初始化状态
  dp[0][1] = 0;
  for(let i = 0; i <= n; i++){
    dp[i][i] = 0;
  }
  // 状态转移
  // 猜从 1 -> i 的值设为 x 有3种可能
  // 1 x是答案, 2 小于x -> x + dp[0][x - 1],    3 大于x -> x + dp[x + 1][n];
  for(let x = n; x >= 0; x--){
      for(let y = x; y <= n; y++){
          for(let k = x + 1; k < y; k++){
              dp[x][y] = Math.min(dp[x][y], Math.max(dp[x][k - 1], dp[k + 1][y]) + k)
          }
      }
  }

  return dp[0][n];
};
