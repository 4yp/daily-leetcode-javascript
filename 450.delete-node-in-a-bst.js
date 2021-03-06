/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] Delete Node in a BST
 *
 * https://leetcode.cn/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (50.85%)
 * Likes:    847
 * Dislikes: 0
 * Total Accepted:    130.7K
 * Total Submissions: 253.4K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * Given a root node reference of a BST and a key, delete the node with the
 * given key in the BST. Return the root node reference (possibly updated) of
 * the BST.
 * 
 * Basically, the deletion can be divided into two stages:
 * 
 * 
 * Search for a node to remove.
 * If the node is found, delete the node.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [5,3,6,2,4,null,7], key = 3
 * Output: [5,4,6,2,null,null,7]
 * Explanation: Given key to delete is 3. So we find the node with value 3 and
 * delete it.
 * One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
 * Please notice that another valid answer is [5,2,6,null,4,null,7] and it's
 * also accepted.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [5,3,6,2,4,null,7], key = 0
 * Output: [5,3,6,2,4,null,7]
 * Explanation: The tree does not contain a node with value = 0.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = [], key = 0
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * Each node has a unique value.
 * root is a valid binary search tree.
 * -10^5 <= key <= 10^5
 * 
 * 
 * 
 * Follow up: Could you solve it with time complexity O(height of tree)?
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return root;
  }
  if (root.val === key) {
    if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    }

    let node = root.right
    while (node.left) {
      node = node.left
    }
    node.left = root.left
    return root.right
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  return root;
};
// @lc code=end

