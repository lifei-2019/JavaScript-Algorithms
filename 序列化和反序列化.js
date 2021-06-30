const serialize = root =>{
    if(root==null){
        return 'X';
    }
    const left = serialize(root.left)
    const right = serialize(root.right)
    return `${root.val},${left},${right}`
}

const deserialize = data =>{
    const list = data.split(',')
    const build = list =>{
        const val = list.shift()
        if(val == 'X') return null;
        
        const root = new Treenode(root)
        root.left = build(list)
        root.right = build(right)
        return root
    }

    return build(list)
}