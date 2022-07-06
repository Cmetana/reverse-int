module.exports = function reverse (n) {
    if (n < 0) { //check if number are not negative
        let numToPositive = -n; 
        return numToPositive.toString().split('').reverse().join(''); 
    }
    return n.toString().split('').reverse().join('');
};