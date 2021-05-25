// 使所有区间异或为0

const minChanges = function(nums,k){
    let n = nums.length
    const max = 1024
    const f = new Array(k).fill(0).map(()=>new Array(max).fill(999999999))
    const g = new Array(k).fill(999999999)
    for(let i=0,cnt=0; i<k; i++,cnt=0){
        // map统计当前列的每个数的出现次数
        // cnt表示有多少个数
        let map = new Map()
        for(let j=i;j<n;j+=k){
            map.set(nums[j],map.get(nums[j])+1||1)
            cnt++
        }
        if(i==0){
            for (let xor = 0;xor<max;xor++){
                f[0][xor]=Math.min(f[0][xor],cnt-(map.get(xor)||0))
                g[0] = Math.min(g[0], f[0][xor])
            }
        }else{
            for (let xos = 0; xos < max; xos++) {
                f[i][xos] = g[i - 1] + cnt; // 整列替换
                for (let key in map) { // 部分替换
                    f[i][xos] = Math.min(f[i][xos], f[i - 1][xos ^ key] + cnt - map.get(key));
                }
                g[i] = Math.min(g[i], f[i][xos]);
            }
        }
    }
    return f[k - 1][0];
}