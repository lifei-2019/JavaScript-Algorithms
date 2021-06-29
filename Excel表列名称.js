const convertToTitle = function (n) {
    let res = '', words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (n > 26) {
      let r = n % 26;
      if (r === 0) {
        n = n / 26 - 1;
      } else {
        n = parseInt(n / 26);
      }
      res = (words[r - 1] || 'Z') + res;
    }
    res = words[n - 1] + res;
    return res;
};
  