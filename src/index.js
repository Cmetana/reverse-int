module.exports = function reverse (n) {
    if (n <= 0) { //check if number are not negative
        let delMin = -n; //transform number to positive  
        let result = delMin.split('').reverse().join('');
    }
    return result; 
};