/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 *
 * https://leetcode.cn/problems/valid-boomerang/description/
 *
 * algorithms
 * Easy (48.38%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    27.8K
 * Total Submissions: 57.4K
 * Testcase Example:  '[[1,1],[2,3],[3,2]]'
 *
 * Given an array points where points[i] = [xi, yi] represents a point on the
 * X-Y plane, return true if these points are a boomerang.
 * 
 * A boomerang is a set of three points that are all distinct and not in a
 * straight line.
 * 
 * 
 * Example 1:
 * Input: points = [[1,1],[2,3],[3,2]]
 * Output: true
 * Example 2:
 * Input: points = [[1,1],[2,2],[3,3]]
 * Output: false
 * 
 * 
 * Constraints:
 * 
 * 
 * points.length == 3
 * points[i].length == 2
 * 0 <= xi, yi <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  return (points[1][0] - points[0][0]) * (points[2][1] - points[0][1]) !== (points[1][1] - points[0][1]) * (points[2][0] - points[0][0])
};
// @lc code=end

