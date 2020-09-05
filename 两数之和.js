// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一 map
const twoSum = (nums, target) => {
    // 1. 构造哈希表
    const map = new Map(); // 存储方式 {need, index}
  
    // 2. 遍历数组
    for (let i = 0; i < nums.length; i++) {
      // 2.1 如果找到 target - nums[i] 的值
      if (map.has(nums[i])) {
        return [map.get(nums[i]), i];
      } else {
        // 2.2 如果没找到则进行设置
        map.set(target - nums[i], i);
      }
    }
}

// 方法二
const twoSum1 = function(nums, target) {
    let i = nums.length;
    while(i > 1) {
        let last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length]
        }
        i--
    }
}