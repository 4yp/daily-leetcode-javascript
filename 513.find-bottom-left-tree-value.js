/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 *
 * https://leetcode.cn/problems/find-bottom-left-tree-value/description/
 *
 * algorithms
 * Medium (73.13%)
 * Likes:    338
 * Dislikes: 0
 * Total Accepted:    119.7K
 * Total Submissions: 161K
 * Testcase Example:  '[2,1,3]'
 *
 * Given the root of a binary tree, return the leftmost value in the last row
 * of the tree.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [2,1,3]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1,2,3,4,null,5,6,null,null,7]
 * Output: 7
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let ret = 0;
  const queue = [root];
  while (queue.length) {
    const p = queue.shift();
    if (p.right) {
      queue.push(p.right);
    }
    if (p.left) {
      queue.push(p.left);
    }
    ret = p.val;
  }
  return ret;
};
// @lc code=end

