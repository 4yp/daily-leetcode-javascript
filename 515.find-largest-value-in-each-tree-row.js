/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
 *
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (65.78%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    88.1K
 * Total Submissions: 133.1K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * Given the root of a binary tree, return an array of the largest value in
 * each row of the tree (0-indexed).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,3,2,5,3,null,9]
 * Output: [1,3,9]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1,2,3]
 * Output: [1,3]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree will be in the range [0, 10^4].
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const dfs = (res, root, curHeight) => {
    if (curHeight === res.length) {
      res.push(root.val);
    } else {
      res.splice(curHeight, 1, Math.max(res[curHeight], root.val));
    }
    if (root.left) {
      dfs(res, root.left, curHeight + 1);
    }
    if (root.right) {
      dfs(res, root.right, curHeight + 1);
    }
  }
  dfs(res, root, 0);
  return res;
};
// @lc code=end

