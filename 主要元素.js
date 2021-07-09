/**
 * @param {number[]} nums
 * @return {number}
 */
 const majorityElement = function(nums) {
    let count =0
    let num=null
    // 求数组里的众数
    for(let i=0;i<nums.length;i++){
        if(count==0){
            num=nums[i]
            count=1
        }else if(num==nums[i]){
            count++
        }else{
            count--
        }
    }
    count=0
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === num) {
            count++
        }
    }
    return count > (nums.length / 2) ? num : -1
};