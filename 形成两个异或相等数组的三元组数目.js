// 没看明白 待重看

const countTriplets = function (arr) {
    let r = 0, h = new Map()
    arr.unshift(0)
    for (let i = 1; i < arr.length; i++) {
        h.get(arr[i - 1]) ? h.get(arr[i - 1]).push(i) : h.set(arr[i - 1], [i])
        arr[i] ^= arr[i - 1]
        if (h.get(arr[i])) r += h.get(arr[i]).length * i - h.get(arr[i]).reduce((a, b) => a + b)
    }
    return r
};