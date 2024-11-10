const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    let result = "";
    for(let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }
    return result === word;
};

// Do not edit below this line
module.exports = palindromes;
