const reverseParentheses = function(s) {
    const stack =[]
    for (const x of s){
        if(x==')'){
            const arr = []
            let k=stack.pop()
            // 遇到下一个(之前用数组模拟一个入栈
            while(k!='('){
                arr.push(k)
                k=stack.pop()
            }
            // 局部扭转顺序后存到stack里
            stack.push(...arr)
        } else{
            stack.push(x)
        }
    }
    return stack.join('')
}