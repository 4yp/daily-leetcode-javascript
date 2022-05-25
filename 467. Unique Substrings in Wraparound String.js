/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 *
 * https://leetcode.cn/problems/unique-substrings-in-wraparound-string/description/
 *
 * algorithms
 * Medium (44.83%)
 * Likes:    315
 * Dislikes: 0
 * Total Accepted:    28.6K
 * Total Submissions: 56K
 * Testcase Example:  '"a"'
 *
 * 把字符串 s 看作是 “abcdefghijklmnopqrstuvwxyz” 的无限环绕字符串，所以 s 看起来是这样的：
 * 
 * 
 * "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...." . 
 * 
 * 
 * 现在给定另一个字符串 p 。返回 s 中 唯一 的 p 的 非空子串 的数量 。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: p = "a"
 * 输出: 1
 * 解释: 字符串 s 中只有一个"a"子字符。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: p = "cac"
 * 输出: 2
 * 解释: 字符串 s 中的字符串“cac”只有两个子串“a”、“c”。.
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: p = "zab"
 * 输出: 6
 * 解释: 在字符串 s 中有六个子串“z”、“a”、“b”、“za”、“ab”、“zab”。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= p.length <= 10^5
 * p 由小写英文字母构成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let dp = new Array(26).fill(0), 
      k = 1

  for (let i = 0; i < p.length; i++) {
    if (i > 0 && (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 === 1) {
      k++
    } else {
      k = 1
    }
    dp[p[i].charCodeAt(0) % 26] = Math.max(k, dp[p[i].charCodeAt(0) % 26])
  }
  return dp.reduce((prev, next) => {
    return prev + next
  }, 0)

}
// @lc code=end

