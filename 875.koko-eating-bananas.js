/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 *
 * https://leetcode.cn/problems/koko-eating-bananas/description/
 *
 * algorithms
 * Medium (49.21%)
 * Likes:    377
 * Dislikes: 0
 * Total Accepted:    93.8K
 * Total Submissions: 184.7K
 * Testcase Example:  '[3,6,7,11]\n8'
 *
 * Koko loves to eat bananas. There are n piles of bananas, the i^th pile has
 * piles[i] bananas. The guards have gone and will come back in h hours.
 * 
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she
 * chooses some pile of bananas and eats k bananas from that pile. If the pile
 * has less than k bananas, she eats all of them instead and will not eat any
 * more bananas during this hour.
 * 
 * Koko likes to eat slowly but still wants to finish eating all the bananas
 * before the guards return.
 * 
 * Return the minimum integer k such that she can eat all the bananas within h
 * hours.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: piles = [30,11,23,4,20], h = 5
 * Output: 30
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: piles = [30,11,23,4,20], h = 6
 * Output: 23
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= piles.length <= 10^4
 * piles.length <= h <= 10^9
 * 1 <= piles[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 二分的边界值，最小速度为1，最大速度为最多的香蕉那堆的数量（确保一次能吃掉一堆）
  let left = 1, right = Math.max(...piles)

  // 计算当前速度下需要多久能吃完
  const getHours = (piles, speed = 1) => {
    let hours = 0
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / speed)
    }
    return hours
  }

  // 二分查找速度
  while (left <= right) {
    const speed = Math.floor(left + (right - left) / 2)

    const curHours = getHours(piles, speed)
    // 根据当前速度来缩小边界值
    if (curHours === h) {
      right = speed - 1
    } else if (curHours > h) {
      left = speed + 1
    } else if (curHours < h) {
      right = speed - 1
    }
  }

  return left
};
// @lc code=end

