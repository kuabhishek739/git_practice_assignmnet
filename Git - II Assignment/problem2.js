function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

let inputString = "racecar";
if (isPalindrome(inputString)) {
    console.log("'" + inputString + "' is a palindrome.");
} else {
    console.log("'" + inputString + "' is not a palindrome.");
}
