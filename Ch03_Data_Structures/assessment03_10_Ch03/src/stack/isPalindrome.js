/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../stack/stack");

function isPalindrome(text) {
  if (text == null)
    return false;
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  
  if (cleanText === "")
    return false;
  if (cleanText.length == 1)
    return true;

  // TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
  const s = new Stack();
  let middle = Math.floor(cleanText.length / 2);
  for (let i=0; i<middle; i++) {
    s.push(cleanText[i]);
  }
  
  if (cleanText.length % 2 == 1) {
    middle++;
  }
  for (let i=middle; i<cleanText.length; i++) {
    if (s.pop() != cleanText[i])
      return false;
  }

  return true;
}

module.exports = isPalindrome;
