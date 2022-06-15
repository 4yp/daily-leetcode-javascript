/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] Find K-th Smallest Pair Distance
 *
 * https://leetcode.cn/problems/find-k-th-smallest-pair-distance/description/
 *
 * algorithms
 * Hard (39.19%)
 * Likes:    359
 * Dislikes: 0
 * Total Accepted:    25.8K
 * Total Submissions: 57.2K
 * Testcase Example:  '[1,3,1]\n1'
 *
 * The distance of a pair of integers a and b is defined as the absolute
 * difference between a and b.
 * 
 * Given an integer array nums and an integer k, return the k^th smallest
 * distance among all the pairs nums[i] and nums[j] where 0 <= i < j <
 * nums.length.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,3,1], k = 1
 * Output: 0
 * Explanation: Here are all the pairs:
 * (1,3) -> 2
 * (1,1) -> 0
 * (3,1) -> 2
 * Then the 1^st smallest distance pair is (1,1), and its distance is 0.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,1,1], k = 2
 * Output: 0
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [1,6,1], k = 3
 * Output: 5
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == nums.length
 * 2 <= n <= 10^4
 * 0 <= nums[i] <= 10^6
 * 1 <= k <= n * (n - 1) / 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b)
  let low = 0
  let high = nums[nums.length - 1] - nums[0]
  while (low < high) {
    let mid = (low + high) >> 1
    let count = 0, left = 0
    for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > mid) {
        left++
      }
      count += right - left
    }

    if (count >= k) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
};
// @lc code=end

