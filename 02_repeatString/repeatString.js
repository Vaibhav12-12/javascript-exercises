const repeatString = function(str, times) {
    if(times < 0) return "ERROR";
    let result = "";
    while(times > 0) {
        times--;
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
