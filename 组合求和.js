// 回溯，dfs
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。
combinationSum = function(candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
      if (idx === candidates.length) {
          return;
      }
      if (target === 0) {
          ans.push(combine);
          return;
      }
      // 直接跳过
      dfs(target, combine, idx + 1);
      // 选择当前数
      if (target - candidates[idx] >= 0) {
          dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
      }
  }
  dfs(target, [], 0);
  return ans;
}

// 方法二
const combinationSum = (candidates, target) => {
    const res = [];
    const dfs = (start, temp, sum) => {
      if (sum >= target) {
        if (sum == target) {
          res.push(temp.slice()); // temp的拷贝
        }
        return;     // 结束当前递归
      }
      for (let i = start; i < candidates.length; i++) { // 枚举出选择，从start开始
        temp.push(candidates[i]);           // 加入“部分解”
        dfs(i, temp, sum + candidates[i]);  // 往下继续选择，同时sum累加上当前数字
        temp.pop();                         // 撤销选择
      }
    };
    dfs(0, [], 0);
    return res;}