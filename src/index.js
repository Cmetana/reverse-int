module.exports = function reverse (n) {
    if (n <= 0) { //check if number are not negative
        let delMin = -n; //transform number to positive  
        let splitToArray = delMin.split(''); // split number to array
        let reverseArray = reverse(splitToArray); // reverse array
        let joinArray = reverseArray.join(); // join array
        let result = Number(joinArray);
    }
    return result; 
}