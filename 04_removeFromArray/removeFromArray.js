const removeFromArray = function(arr, ...target) {
    return arr.filter(item => !target.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
