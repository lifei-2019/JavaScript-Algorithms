// 函数柯里化 累加函数
function add(){
	let args=Array.prototype.slice.call(arguments)
    let adder = function(){
        args.push(...arguments)
        return adder
    }
    adder.toString = function(){
        return args.reduce((a,b)=>a+b)
    }
    return adder
}
let res = add(1,2)(2,3)(4).toString()
console.log(res)




// 两个大数相加
function addBig(a,b){
    let maxLength = Math.max(a.length,b.length)
    a=a.padStart(maxLength, 0)
    b=b.padStart(maxLength, 0)
    let t=0,f=0
    let sum = ''
    for(let i=maxLength-1;i>=0;i--){
        t=parseInt(a[i])+parseInt(b[i])+f
        // 判断是否进位
        f=Math.floor(t/10)
        sum=t%10+sum
    }
    if(f==1){
        sum='1'+sum
    }
    return sum
}
console.log(addBig("9007199254740991","1234567899999999999"))




// 数组扁平化/序列化？
// 1.递归
const flat1 = (s)=>{
    if(!Array.isArray(s)){
        return [s]
    }
    let res = []
    for (let i=0;i<s.length;i++) {
        res.push(...flat1(s[i]));
    }
    return res
}
console.log(flat1([1, [2, [3, 4, [5]]]]))

// 2.迭代
const flat2 = s=>{
    const stack = [...s]
    const res =[]
    while(stack.length){
        // 从栈里取出
        const next = stack.pop()
        if (Array.isArray(next)) {
            // 把next扁平化，然后放入stack中
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse()
}
// 3.ES6
const flat3 = s=>{
    return s.flat()
}




// 数组去重
// Array.from(new Set(arr))

// if(res.indexOf(arr[i])==-1){
//     res.push(arr[i])
// }

// 或者用map存储




// 实现indexOf
function indexOfJS(orgin,search){
    let index = -1
    let s_index = 0
    let move = 0
    for (let i=0;i<orgin.length;i++){
        move++
        if(orgin.substr(i,1)==search.substr(s_index,1)){
            s_index++
            if(s_index == search.length){
                index = move-search.length
                break
            }
            
        }else{
            s_index=0
        }
    }
    return index
}
console.log(indexOfJS('边叫边练，我喜欢叫练','叫练'))


// 红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

var light = function (timmer, cb) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function () {
    Promise.resolve().then(function () {
        return light(3000, red);
    }).then(function () {
        return light(2000, green);
    }).then(function () {
        return light(1000, yellow);
    }).then(function () {
        step();
    });
}

step();


// 判断回文
const isPalindrome = x=>{
    return x.toString()==x.toString().split('').reverse().join('')
}

// reduce实现forEach

// 设计一个简单的任务队列，要求分别在 1,3,4 秒后打印出 "1", "2", "3"
new Queue()

// 数组转树&&树转数组


// 插入排序、插入排序

// 防抖和节流
const debounce=(func,wait)=>{
    let timeout
    return function(){
        if(timeout){
            clearTimeout(timeout)
        }
        timeout=setTimeout(()=>{
            func.apply(this,arguments)
        },wait)
    }
}
const throttle=(func,wait)=>{
    let timeout
    return function(){
        if(!timeout){
            timeout=setTimeout(()=>{
                timeout=null
                func.apply(this,arguments)
            },wait)
        }
    }
}

// 三角形
// .triangle{
//     width:0;
//     height:0;
//     border:50px solid transparent;
//     border-top-color: black;
// }