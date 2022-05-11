/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-bst/description/
 *
 * algorithms
 * Medium (56.54%)
 * Likes:    352
 * Dislikes: 0
 * Total Accepted:    38.2K
 * Total Submissions: 63.4K
 * Testcase Example:  '[2,1,3]'
 *
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
 * 
 * 设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。
 * 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 * 
 * 编码的字符串应尽可能紧凑。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [2,1,3]
 * 输出：[2,1,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数范围是 [0, 10^4]
 * 0 <= Node.val <= 10^4
 * 题目数据 保证 输入的树是一棵二叉搜索树。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = []
  const preOder = (node) => {
    if (!node) return
    res.push(node.val)
    preOder(node.left)
    preOder(node.right)
  }
  preOder(root)
  return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null
  const preorder = data.split(',')
  const inorder = preorder.slice().sort((a, b) => a - b)
  const buildTree = (preorder, inorder) => {
    if (!preorder.length || !inorder.length) {
      return null
    }
    const val = preorder.shift()
    const idx = inorder.indexOf(val)
    const root = new TreeNode(val)
    root.left = buildTree(preorder, inorder.slice(0, idx))
    root.right = buildTree(preorder, inorder.slice(idx + 1))
    return root
  }
  return buildTree(preorder, inorder)

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

