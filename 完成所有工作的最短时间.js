// 输入：jobs = [1,2,4,7,8], k = 2
// 输出：11
// 解释：按下述方式分配工作：
// 1 号工人：1、2、8（工作时间 = 1 + 2 + 8 = 11）
// 2 号工人：4、7（工作时间 = 4 + 7 = 11）
// 最大工作时间是 11 。
const minimumTimeRequired = function(jobs, k) {
    // u:当前处理到那个job
    // used:当前分配给多少个工人
    // sum:工人得分配情况，sum[0]=x 就是0号工人工作量为x
    // max:当前的[最大工作时间]
    function dfs(u,used,sum,max){
        if(max>=ans) return;
        if(u == n){
            ans=max
            return ;
        }
        // 优先分配给[空闲工人]
        if(used<k){
            sum[used]=jobs[u]
            dfs(u+1, used+1, sum, Math.max(sum[used], max))
            sum[used]=0
        }
        for(let i=0;i<used;i++){
            sum[i]+=jobs[u]
            dfs(u+1, used, sum,Math.max(sum[i],max))
            sum[i]-=jobs[u]
        }
    }
    let ans = 0x3f3f3f3f
    let n=jobs.length
    const sum=new Array(k)
    dfs(0,0,sum,0)
    return ans
};