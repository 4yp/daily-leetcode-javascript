/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 *
 * https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii/description/
 *
 * algorithms
 * Medium (61.43%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    40.9K
 * Total Submissions: 66.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。
 * 
 * 在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：2
 * 解释：
 * 只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
 * [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,10,2,9]
 * 输出：16
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  let ans = 0
  nums.sort((a, b) => a - b)
  const n = nums.length, mid = nums[Math.floor(n / 2)]
  for (const num of nums) {
    ans += Math.abs(num - mid)
  }
  return ans
};
// @lc code=end

