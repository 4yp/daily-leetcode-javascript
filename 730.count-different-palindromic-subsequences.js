/*
 * @lc app=leetcode.cn id=730 lang=javascript
 *
 * [730] Count Different Palindromic Subsequences
 *
 * https://leetcode.cn/problems/count-different-palindromic-subsequences/description/
 *
 * algorithms
 * Hard (50.24%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 19.8K
 * Testcase Example:  '"bccb"'
 *
 * Given a string s, return the number of different non-empty palindromic
 * subsequences in s. Since the answer may be very large, return it modulo 10^9
 * + 7.
 * 
 * A subsequence of a string is obtained by deleting zero or more characters
 * from the string.
 * 
 * A sequence is palindromic if it is equal to the sequence reversed.
 * 
 * Two sequences a1, a2, ... and b1, b2, ... are different if there is some i
 * for which ai != bi.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "bccb"
 * Output: 6
 * Explanation: The 6 different non-empty palindromic subsequences are 'b',
 * 'c', 'bb', 'cc', 'bcb', 'bccb'.
 * Note that 'bcb' is counted only once, even though it occurs twice.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s =
 * "abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba"
 * Output: 104860361
 * Explanation: There are 3104860382 different non-empty palindromic
 * subsequences, which is 104860361 modulo 10^9 + 7.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 1000
 * s[i] is either 'a', 'b', 'c', or 'd'.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 本题和 516、 940题有点相通之处
// 1.涉及到"不同的子序列"，就一定需要考虑重复的场景
// 2.涉及到取模，就一定要考虑负数的场景

// dp[i][j] 表示 s[i,j] 范围内不同的回文子序列个数，最后需要返回 dp[0][N - 1]
// 如果 s[i] === s[j]:
// 当区间[i+1, j-1]有 0 个字符等于 x 时：
//     dp[i][j] = dp[i+1][j-1] * 2 + 2
// 当区间[i+1, j-1]有 1 个字符等于 x 时：
//     dp[i][j] = dp[i+1][j-1] * 2 + 1
// 当区间[i+1, j-1]有 >= 2 个字符等于 x 时：
//     dp[i][j] = dp[i+1][j-1] * 2 - dp[l+1][r-1]
// 如果 s[i] !== s[j]:
//     dp[i][j] = dp[i][j-1] + dp[i+1][j] - dp[i+1][j-1] (容斥原理）
// 显然有初始值 dp[i][i] = 1
var countPalindromicSubsequences = function(s) {
  
  const N = s.length
  const mod = 1e9 + 7
  const dp = new Array(N)
  for (let i = 0; i < N; i++) {
    dp[i] = new Array(N).fill(0)
    dp[i][i] = 1
  }
  // 根据状态转移方程，i层需要倒序遍历
  for (let i = N - 2; i >= 0; i--) {
    for (let j = i + 1; j < N; j++) {
      if (s[i] !== s[j]) {
        dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1]
      } else {
        dp[i][j] = dp[i + 1][j - 1] * 2 + 2
        // 对区间 [i+1,j-1] 进行分析，判断区间内 和 s[i] 相等的数量
        let l = i + 1
        let r = j - 1
        while (l <= r && s[l] !== s[i]) l++
        while (l <= r && s[r] !== s[i]) r--
        if (l === r) {
          dp[i][j] -= 1
        } else if (l < r) {
          dp[i][j] -= dp[l + 1][r - 1] + 2
        }
      }
      // mod
      dp[i][j] = dp[i][j] > 0 ? dp[i][j] % mod : dp[i][j] + mod
    }
  }
  return dp[0][N - 1]
};
// @lc code=end

