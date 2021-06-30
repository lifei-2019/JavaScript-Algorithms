const spiralOrder = s=>{
    const res = []
    const rows = s.length, cols=s[0].length, n=rows*cols
    let l=0,r=cols-1,t=0,b=rows-1
    while(res.length!==n){
        // 从左到右
        for(let i=l;i<=r;i++) res.push(s[t][i])
        t++
        // 从上到下
        for (let i = t; i <= b; i++) res.push(s[i][r])
        r--

        // 检查下是否越觉
        if (res.length === n) break

        // 从右到左
        for (let i = r; i >= l; i--) res.push(s[b][i])
        b-- 
        // 从下到上
        for (let i = b; i >= t; i--) res.push(s[i][l])
        l++
    }
    return res
}