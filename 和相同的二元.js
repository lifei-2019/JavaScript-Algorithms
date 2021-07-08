const numSubarraysWithSum = function(nums, goal) {
    const map =new Map()
    let sum=0,count=0
    for(const x of nums){
        
        map[sum]=(map[sum]||0)+1
        sum+=x
        count += map[sum - goal] || 0;
    }
    return count
};