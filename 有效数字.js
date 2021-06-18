const isNumber = function(s){
    // 此处要考虑Infinity吧
    return !isNaN(Number(s)) && !s.includes('Infinity')
    // return (Number(s)==0||!!Number(s)) && (s.trim()!="") && !s.includes('Infinity')
}

// !!Number(value) 的输出情况

//   console.log(Number('string'));      // stdout: NaN
//   console.log(!Number('string'));     // stdout: true
//   console.log(!!Number('string'));    // stdout: false
