/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 *
 * https://leetcode.cn/problems/duplicate-zeros/description/
 *
 * algorithms
 * Easy (58.15%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    46.1K
 * Total Submissions: 76.2K
 * Testcase Example:  '[1,0,2,3,0,4,5,0]'
 *
 * Given a fixed-length integer array arr, duplicate each occurrence of zero,
 * shifting the remaining elements to the right.
 * 
 * Note that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place and do not return
 * anything.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: arr = [1,0,2,3,0,4,5,0]
 * Output: [1,0,0,2,3,0,0,4]
 * Explanation: After calling your function, the input array is modified to:
 * [1,0,0,2,3,0,0,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: arr = [1,2,3]
 * Output: [1,2,3]
 * Explanation: After calling your function, the input array is modified to:
 * [1,2,3]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0, n = arr.length; i < n; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
      arr.length = n
    }
  }
};
// @lc code=end

