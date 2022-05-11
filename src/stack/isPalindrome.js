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

const Stack = require("../linked-list/stack");

function isPalindrome(text) {
  text = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (text.length === 0) return false;

  const stack = new Stack();

  const firstHalfLength = Math.floor(text.length / 2);

  // if string has a middle character, remove it - doesn't affect palindrome
  if (text.length % 2) {
    text = text.slice(0, firstHalfLength) + text.slice(firstHalfLength + 1);
  }

  // loop through text putting the first half into a stack, and then comparing the second half
  for (let i = 0; i < text.length; i++) {
    if (i < firstHalfLength) {
      stack.push(text[i]);
    }
    if (i >= firstHalfLength) {
      if (stack.pop() !== text[i]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isPalindrome;
