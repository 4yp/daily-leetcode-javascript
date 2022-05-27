/**
 * 
You have a large text file containing words. Given any two different words, find the shortest distance (in terms of number of words) between them in the file. If the operation will be repeated many times for the same file (but different pairs of words), can you optimize your solution?

Example:

Input: words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
Output: 1
Note:

words.length <= 100000


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/find-closest-lcci

 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var findClosest = function(words, word1, word2) {
  const n = words.length
  let min = n, index1 = Number.MIN_SAFE_INTEGER, index2 = Number.MAX_SAFE_INTEGER
  for(let i = 0; i < n; i++) {
      if(words[i] === word1) index1 = i
      if(words[i] === word2) index2 = i
      min = Math.min(min, Math.abs(index2 - index1))
  }
  return min
};
