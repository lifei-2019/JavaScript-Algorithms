const deleteAndEarn = nums =>{
    const cnts = new Array(10001).fill(0)
    let n = nums.length
    let max=0
    for(let i=0;i<n;i++){
        cnts[nums[i]]++
        max = Math.max(max,nums[i])
    }
     // f[i][0] 代表「不选」数值 i；f[i][1] 代表「选择」数值 i
    let arr = new Array(max+1).fill(0).map(()=>new Array(2).fill(0))
    for(let i=1;i<=max;i++){
        arr[i][1] = arr[i-1][0]+i*cnts[i]
        arr[i][0] = Math.max(arr[i - 1][1], arr[i - 1][0]);
    }
    return Math.max(arr[max][0],arr[max][1])
}