/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
    if (word == null || word === "")
        return null;
    if (word.length == 1)
        return word;
    const letters = new Set();
    let left = 0;
    let right = 1;
    letters.add(word.charAt(left));
    for (right=1; right<word.length; right++) {

        if (word.charAt(left) == word.charAt(right)) {
            left += 1;
            while (letters.has(word.charAt(left)) || word.charAt(left) == word.charAt(left+1)) {
                left += 1;
            }
            letters.add(word.charAt(right));
        }
        (word.charAt(right));
    }
    return word.charAt(left) != word.charAt(right-1) ? word.charAt(left) : null;
}

console.log('c    ' + firstSingleCharacter('c'));
console.log('c    ' + firstSingleCharacter('abacb'));
console.log('null ' + firstSingleCharacter('abacbc'));
console.log('t    ' + firstSingleCharacter('thinkful'));
console.log('c    ' + firstSingleCharacter('abcab'));
console.log('d    ' + firstSingleCharacter('abbcdabc'));
console.log('d    ' + firstSingleCharacter('abacbdabc'));
console.log('null ' + firstSingleCharacter('abadcbdabc'));

module.exports = firstSingleCharacter;
