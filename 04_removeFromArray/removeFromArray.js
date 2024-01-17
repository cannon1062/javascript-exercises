const removeFromArray = function(array, ...rm) {
    let i = 0;
    while (i < array.length) {
        let j = 0;
        while (j < rm.length) {
            if (array[i] === rm[j]) {
                array.splice(i, 1);
                i--;
            }
            j++;
        }
        i++;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
