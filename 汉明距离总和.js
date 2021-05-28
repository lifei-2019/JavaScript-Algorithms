/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法1 结合昨天的汉明距离，将数组中的数字两两异或，最后超时。。
 const HammingDistance = function(x,y) {
    let s= x^y,ret=0
    while(s!=0){
        s=s&(s-1)
        ret++
    }
    return ret
}
const totalHammingDistance = function(nums) {
let n = nums.length
let res = 0
for (let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        res+= HammingDistance(nums[i],nums[j])
    }
}
return res
};

// 方法二 利用每个bit位置的两两之间的汉明距离的总和，实际上为：1的个数*0的个数
// 该方法复杂度为O(n)
const totalHammingDistance = function(nums) {
    let res = 0
    const n = nums.length
    // 这里因为数字肯定小于2的32次方
    for (let i=0;i<32;i++){
        let sumOne = 0
        // 这里纵向对比，将数组中每一项对应的bit位进行与操作
        for(j=0;j<n;j++){
            sumOne+=nums[j]&1 
            // 与操作后右移一位，进行从右往左数第二位，并以此类推
            nums[j] >>=1
        }
        // 每个循环内部计算sumOne和sumZero，其中sumZero=n=sunOne
        res+= sumOne*(n-sumOne)
    }
    return res
}