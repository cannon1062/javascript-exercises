const palindromes = function (str) {
     newStr = str.match(/[0-z]/ig).join('');
    return newStr.toLowerCase() === newStr.split('').reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
