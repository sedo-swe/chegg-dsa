/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
    // Count number of each character in word
    const letters = new Map();
    for (let i=0; i<word.length; i++) {
        let c = word.charAt(i);
        if (letters.has(c)) {
            letters.set(c, letters.get(c) + 1);
        } else {
            letters.set(c, 1);
        }
    }

    // check only one character has odd number while all others have even number
    let oddLetters = 0;
    let keys = 0;
    for (let k of letters.keys()) {
        keys += 1;
        if (letters.get(k) %  2 != 0) 
            oddLetters += 1;
    }

    if (oddLetters <= 1)
        return true;

    return false;
}

console.log(permutationPalindrome('acecarr'));
console.log(permutationPalindrome('north'));
console.log(permutationPalindrome('n'));
console.log(permutationPalindrome('racedcar'));

module.exports = permutationPalindrome;
