const fibonacci = function(num) {
    if (+num === 0) {
        return 0;
    }
    if (+num < 0) {
        return "OOPS";
    }
    let fOlder = 0;
    let fOld = 1;
    let fN = fOlder + fOld; // initializes at fTwo
    let i = 2; // Loop starts at fTwo
    while (i < +num) {
        fOlder = fOld;
        fOld = fN;
        fN = fOld + fOlder;
        i++;
    }
    return fN;
};

// Do not edit below this line
module.exports = fibonacci;
