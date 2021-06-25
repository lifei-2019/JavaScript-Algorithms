/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function(points) {
    points.sort((a,b)=>a[0]-b[0])
    let max=1
    const dfs = (start,selected)=>{
        max = Math.max(max,selected.length)
        for(let i=start;i<points.length;i++){
            if(selected.length<2){
                selected.push(points[i])
                dfs(i+1,selected)
                selected.pop()
            }else{
                const curK = (selected[0][0] - selected[1][0]) / (selected[0][1] - selected[1][1]); /* 当前数组中直线的斜率 */
                const thisK = (selected[0][0] - points[i][0]) / (selected[0][1] - points[i][1]); /* 新的点与数组中任一点的斜率 */
                if (curK === thisK){ /* 若新的点在直线上 */
                    selected.push(points[i]);
                    dfs(i+1, selected);
                    selected.pop(); /* 回溯一下 */
                }
            }
        }
    }
    dfs(0,[])
    return max
};