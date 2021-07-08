const countPairs=function(s){
    let mod = 1000000007
    // let max =s.reduce((a,b)=>Math.max(a,b),0)*2
    let max =Math.max(...s)*2
    let res=0
    let map =new Map()
    for(let i=0;i<s.length;i++){
        for(let j=1;j<=max;j<<=1){
            let num = map.get(j-s[i])||0
            res=res+num
        }
        map.set(s[i],(map.get(s[i])||0)+1)
    }
    return res%(10**9+7)
}