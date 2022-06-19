/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
 *
 * https://leetcode.cn/problems/most-frequent-subtree-sum/description/
 *
 * algorithms
 * Medium (68.83%)
 * Likes:    185
 * Dislikes: 0
 * Total Accepted:    33.1K
 * Total Submissions: 44.4K
 * Testcase Example:  '[5,2,-3]'
 *
 * Given the root of a binary tree, return the most frequent subtree sum. If
 * there is a tie, return all the values with the highest frequency in any
 * order.
 * 
 * The subtree sum of a node is defined as the sum of all the node values
 * formed by the subtree rooted at that node (including the node itself).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [5,2,-3]
 * Output: [2,-3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [5,2,-5]
 * Output: [2]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 10^4].
 * -10^5 <= Node.val <= 10^5
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
var findFrequentTreeSum = function (root) {
  let mxOcc = 0;
  const mp = new Map();
  let ans = [];

  const dfs = (root) => {
    if (!root) return 0;
    const cur = root.val + dfs(root.left) + dfs(root.right);
    mp.set(cur, (mp.get(cur) || 0) + 1);
    if (mp.get(cur) > mxOcc) {
      mxOcc = mp.get(cur);
      ans = [cur];
    } else if (mp.get(cur) == mxOcc) {
      ans.push(cur);
    }
    return cur;
  }
  dfs(root);
  return ans;
};
// @lc code=end

