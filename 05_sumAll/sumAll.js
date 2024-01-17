const sumAll = function(a, b) {
    if (a < 0 || 
        b < 0 || 
        typeof a !== 'number' || 
        typeof b !== 'number') {
        return "ERROR";
    }
    let first, last;
    if (a < b) {
        first = a;
        last = b;
    } else {
        first = b;
        last = a;
    }
    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
