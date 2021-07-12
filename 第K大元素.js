
const findKth1 = (nums,k)=>{
    nums.sort((a,b)=>b-a)
    return nums[k-1]
}

// 快排和优化
const findKth2 = (nums,k)=>{
    let quickSort = arr =>{
        quick(arr, 0 ,arr.length-1)
    }

    let quick =(arr, left, right)=>{
        let index 
        // if(left<right){
        //     // 划分数组
        //     index = partition(arr,left,right)
        //     if(left<index-1){
        //         quick(arr,left,index-1)
        //     }
        //     if(right>index){
        //         quick(arr,index,right)
        //     }
        // }

        // 优化
            if(left<right){
                if(k === index) {
                    return arr[index]
                } else if(k < index) {
                    // Top k 在左边
                    return quick(arr, left, index-1, k)
                } else {
                    // Top k 在右边
                    return quick(arr, index+1, right, k)
                }
            }
        return arr[left]
        
      }
      

    // 一次交换
    let partition = (arr,left,right) =>{
        let datum = arr[Math.floor(Math.random()*(right-left+1))+left]
        let i=left,j=right
        while(i<=j){
            while(arr[i]<datum){
                i++
            }
            while(arr[j]>datum){
                j--
            }
            if(i<=j){
                [arr[i],arr[j]]=[arr[j],arr[i]]
                i++
                j--
            }
        }
        return i
    }
    quickSort(nums)
    console.log(nums)
    return nums[arr.length - k]
}


function findtheKthLargest(nums, k) {
    const arr = quickSort(nums);
    return arr[arr.length - k];
}

function quickSort(nums) {
    if(nums.length < 2) {
        return nums;
    }
    let left = [];
    let right = [];
    let pivot = Math.floor(nums.length / 2);
    let p = nums.splice(pivot, 1)[0];
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] < p) {
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }
    return [...quickSort(left), p, ...quickSort(right)];
}