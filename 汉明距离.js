//移位实现位计数
const hammingDistance = function(x,y){
    // 异或运算算出一个值
    let s= x^y,ret=0
    while(s!=0){
        ret += s&1
        // 返回时s右位移一格
        s>>=1
    }
    return ret
}

// Brian Kernighan 算法 基于上面算法的改进，可以跳过两个1中的0
const hammingDistance = function(x,y){
    // 异或运算算出一个值
    let s= x^y,ret=0
    while(s!=0){
        s=s&(s-1)
        ret++
    }
    return ret
}