// 递归算法1

const invertTree = (root) => {
  if (root == null) {
    return root;
  }
  // 分别翻转左、右子树
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // 翻转自己
  root.left = right;
  root.right = left;
  return root;
}




// 递归算法2
const invertTree2 = (root) => {
  if (root == null) {
    return root;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree2(root.left);
  invertTree2(root.right);

  return root;
};



// BFS算法
const invertTree = (root) => {
  if (root == null) {
    return root;
  }
  const queue = [];   // 维护一个队列
  queue.push(root);   // 初始推入第一层的root
  
  while (queue.length) {
    const cur = queue.shift(); // 出列的节点

    const temp = cur.left;     // 交换出列节点左右子树
    cur.left = cur.right;
    cur.right = temp;

    if (cur.left) {            // 左右子节点继续入列考察，因为要继续翻转它们的孩子  
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return root;
};