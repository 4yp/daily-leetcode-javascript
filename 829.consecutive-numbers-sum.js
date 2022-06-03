/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] Consecutive Numbers Sum
 *
 * https://leetcode.cn/problems/consecutive-numbers-sum/description/
 *
 * algorithms
 * Hard (37.04%)
 * Likes:    218
 * Dislikes: 0
 * Total Accepted:    23.5K
 * Total Submissions: 51.6K
 * Testcase Example:  '5'
 *
 * Given an integer n, return the number of ways you can write n as the sum of
 * consecutive positive integers.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 5
 * Output: 2
 * Explanation: 5 = 2 + 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 9
 * Output: 3
 * Explanation: 9 = 4 + 5 = 2 + 3 + 4
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: n = 15
 * Output: 4
 * Explanation: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  let ans = 0;
  const bound = 2 * n;
  for (let k = 1; k * (k + 1) <= bound; k++) {
    if (isKConsecutive(n, k)) {
      ans++;
    }
  }
  return ans;
}

const isKConsecutive = (n, k) => {
  if (k % 2 === 1) {
    return n % k === 0;
  } else {
    return n % k !== 0 && 2 * n % k === 0;
  }
};
// @lc code=end

