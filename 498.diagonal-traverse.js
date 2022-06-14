/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 *
 * https://leetcode.cn/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (50.30%)
 * Likes:    361
 * Dislikes: 0
 * Total Accepted:    81.3K
 * Total Submissions: 149.3K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given an m x n matrix mat, return an array of all the elements of the array
 * in a diagonal order.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,4,7,5,3,6,8,9]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: mat = [[1,2],[3,4]]
 * Output: [1,2,3,4]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10^4
 * 1 <= m * n <= 10^4
 * -10^5 <= mat[i][j] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const res = new Array(m * n).fill(0);
  let pos = 0;
  for (let i = 0; i < m + n - 1; i++) {
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (x < m && y >= 0) {
        res[pos] = mat[x][y];
        pos++;
        x++;
        y--;
      }
    } else {
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        res[pos] = mat[x][y];
        pos++;
        x--;
        y++;
      }
    }
  }
  return res;
};
// @lc code=end

