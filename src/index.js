module.exports = function reverse (n) {
    if (n < 0) { //check if number are not negative
        let numToPositive = -n; // convert negative number to positive (del minus if have)
        return numToPositive.toString().split('').reverse().join(''); //transform number to string => split string to array => reverse array => join array
    }
    return n.toString().split('').reverse().join('');
};