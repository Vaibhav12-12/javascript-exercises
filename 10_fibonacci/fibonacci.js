const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    n = Number(n);
    let arr = [0, 1];
    if(n <= 1) return arr[n];
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
