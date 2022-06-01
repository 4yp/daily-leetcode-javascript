/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 *
 * https://leetcode.cn/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (42.24%)
 * Likes:    373
 * Dislikes: 0
 * Total Accepted:    47K
 * Total Submissions: 104.3K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * You are given an integer array matchsticks where matchsticks[i] is the
 * length of the i^th matchstick. You want to use all the matchsticks to make
 * one square. You should not break any stick, but you can link them up, and
 * each matchstick must be used exactly one time.
 * 
 * Return true if you can make this square and false otherwise.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: matchsticks = [1,1,2,2,2]
 * Output: true
 * Explanation: You can form a square with length 2, one side of the square
 * came two sticks with length 1.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: matchsticks = [3,3,3,3,4]
 * Output: false
 * Explanation: You cannot find a way to form a square with all the
 * matchsticks.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= matchsticks.length <= 15
 * 1 <= matchsticks[i] <= 10^8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (nums.length < 4) return false
  let total = nums.reduce((i, x) => x += i)
  if (total % 4) return false
  nums.sort((a, b) => b - a)
  const SIDE = total / 4
  if (nums[0] > SIDE) return false
  let edges = [0, 0, 0, 0]
  const dfs = (i) => {
    if (i === nums.length) return true
    for (let k = 0; k < 4; k++) {
      if (edges[k] + nums[i] > SIDE || (k && edges[k] === edges[k - 1])) continue
      edges[k] += nums[i]
      if (dfs(i + 1)) return true
      edges[k] -= nums[i]
    }
    return false
  }
  return dfs(0)
};
// @lc code=end

