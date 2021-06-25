/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = [], max = 0
  for(let i = 0; i < s.length; i++) {
      let index = arr.indexOf(s[i])
      if(index !== -1) {
          arr.splice(0, index+1);
      }
      arr.push(s[i]) // 此处也可以写成s.charAt(i)
      max =arr.length>max ? arr.length : max
  }
  return max
}




const longset = (s)=>{
  let ans =0
  let i=0
  let j=0
  const map=new Map()

  while(j<s.length){
    const char = s[j]
    const pos = map.get(char)
    if(pos != undefined&&pos>=i){
      i=pos+1
    }
    map.set(char,j)
    ans = Math.max(j-i+1,ans)
    j++
  }
  return ans
}