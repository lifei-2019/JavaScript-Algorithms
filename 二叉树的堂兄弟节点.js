/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 const isCousins = function(root, x, y) {
    const arr = [root]
    while(arr.length>0){
        let len = arr.length
        while(len-->0){
            let node = arr.shift()
            // 如果两个子节点都存在且刚好是x和y，返回false
            if(node.left!=null&&node.right!=null&&((node.left.val==x&&node.right.val==y)||node.left.val==y&&node.right.val==x))
                return false
            // 左节点进数组
            if(node.left!=null)
                arr.push(node.left)
            // 右节点进数组
            if(node.right!=null)
                arr.push(node.right)
        }
        // 如果此时找到两个节点同时满足的话，因为前面已经判断不是兄弟，所以符合题意。
        if(arr.find((a)=>a.val==y)&&arr.find(a=>a.val==x)!=undefined)
            return true
    }
    return false
};