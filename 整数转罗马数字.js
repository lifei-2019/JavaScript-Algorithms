
// 硬编码个十百千位数字分别对应罗马数字中的一项
const intToRoman = (num)=> {
    const Q = ["", "M", "MM", "MMM"];
    const B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return Q[Math.floor(num/1000)] + B[Math.floor((num%1000)/100)] + S[Math.floor((num%100)/10)] + G[num%10];
}