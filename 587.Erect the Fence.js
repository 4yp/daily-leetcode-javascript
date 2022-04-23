/*
 * @lc app=leetcode.cn id=587 lang=javascript
 *
 * [587] 安装栅栏
 *
 * https://leetcode-cn.com/problems/erect-the-fence/description/
 *
 * algorithms
 * Hard (40.25%)
 * Likes:    178
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 20.4K
 * Testcase Example:  '[[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]'
 *
 * 在一个二维的花园中，有一些用 (x, y)
 * 坐标表示的树。由于安装费用十分昂贵，你的任务是先用最短的绳子围起所有的树。只有当所有的树都被绳子包围时，花园才能围好栅栏。你需要找到正好位于栅栏边界上的树的坐标。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
 * 输出: [[1,1],[2,0],[4,2],[3,3],[2,4]]
 * 解释:
 * 
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,2],[2,2],[4,2]]
 * 输出: [[1,2],[2,2],[4,2]]
 * 解释:
 * 
 * 即使树都在一条直线上，你也需要先用绳子包围它们。
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 所有的树应当被围在一起。你不能剪断绳子来包围树或者把树分成一组以上。
 * 输入的整数在 0 到 100 之间。
 * 花园至少有一棵树。
 * 所有树的坐标都是不同的。
 * 输入的点没有顺序。输出顺序也没有要求。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
  let n = trees.length;
  if (n < 4) return trees; 

  trees.sort((p, q) => q[0] - p[0] === 0 ? q[1] - p[1] : q[0] - p[0]);

  const orientation = (a ,b, r) => {
    return (b[1] - a[1]) * (r[0] - b[0]) - (b[0] - a[0]) * (r[1] - b[1]);
  }
  let hull = [];
  for (let tree of trees) {
      let len = hull.length;
      while (len >= 2 && orientation(hull[len - 2], hull[len - 1], tree) > 0) {
          hull.pop();
          len = hull.length;
      }
      hull.push(tree);
  }
  hull.pop();
  for (let i = trees.length - 1; i >= 0; i--) {
      let len = hull.length;
      while (len >= 2 && orientation(hull[len - 2], hull[len - 1], trees[i]) > 0) {
          hull.pop();
          len = hull.length;
      }
      hull.push(trees[i]);
  }

  return [...new Set(hull.map(v => v.join()))]
      .map(v => v.split(',').map(x => +x));
};

// @lc code=end

