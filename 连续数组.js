//动态规划
const findMaxLength = function(nums) {
    let map = new Map().set(0,0),res = 0 
    for( let i = 0 , zero = 0 , one = 0; i < nums.length ; i ++ ){
        nums[i] ? one ++ : zero ++
        let key = zero - one
        map.has(key) ? ( res = Math.max(res,i + 1- map.get(key))) : map.set(key,i+1)
    }  
    return res
}