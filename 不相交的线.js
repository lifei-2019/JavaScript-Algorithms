// 类比最长公共子序列

// 方法一：一维动态规划
const maxUncrossedLines = function(A,B){
    let map = new Map()
    // 把B里面的数字去重存到Map里
    for(let i=0;i<B.length;i++){
        let n = B[i]
        if(map.has(n)){
            // map的每一项存的是B数组中重复的项的索引，此处unshift是为了降序排序
            map.get(n).unshift(i)
        }else{
            // 此处存为[i]就是为了上面能够unshift
            map.set(n,[i])
        }
    }
    let arr =[]
    // 把A连接到B所有的线存在arr里
    for(let i=0;i<A.length;i++){
        let n = A[i]
        if(map.has(n)){
            arr=arr.concat(map.get(n))
        }
    }
    // 建一个dp数组
    let dp=new Array(arr.length).fill(1)
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]>arr[j]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return dp.length?Math.max(dp):0
}


// 方法二   二维动态规划
const maxUncrossedLines = function(A,B){
    const m=A.length
    const n=B.length
    // 创造二维数组m+1 * n+1
    const dp=new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
    for(let i=1;i<m+1;i++){
        for(let j=1;j<i;j++){
            dp[i][j]= A[i-1]==B[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j],dp[i][j-1])
        }
    }
    return dp[m][n]
}