const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    return people.sort((a, b) => {
        return ((Object.hasOwn(b, 'yearOfDeath') ? b.yearOfDeath : currentYear) - b.yearOfBirth) - 
               ((Object.hasOwn(a, 'yearOfDeath') ? a.yearOfDeath : currentYear) - a.yearOfBirth);
    })[0];
;}
// Do not edit below this line
module.exports = findTheOldest;
