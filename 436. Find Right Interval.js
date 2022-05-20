/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 *
 * https://leetcode-cn.com/problems/find-right-interval/description/
 *
 * algorithms
 * Medium (49.10%)
 * Likes:    171
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 57.7K
 * Testcase Example:  '[[1,2]]'
 *
 * 给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。
 * 
 * 区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。
 * 
 * 返回一个由每个区间 i 的 右侧区间 在 intervals 中对应下标组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为
 * -1 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：intervals = [[1,2]]
 * 输出：[-1]
 * 解释：集合中只有一个区间，所以输出-1。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：intervals = [[3,4],[2,3],[1,2]]
 * 输出：[-1,0,1]
 * 解释：对于 [3,4] ，没有满足条件的“右侧”区间。
 * 对于 [2,3] ，区间[3,4]具有最小的“右”起点;
 * 对于 [1,2] ，区间[2,3]具有最小的“右”起点。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：intervals = [[1,4],[2,3],[3,4]]
 * 输出：[-1,2,-1]
 * 解释：对于区间 [1,4] 和 [3,4] ，没有满足条件的“右侧”区间。
 * 对于 [2,3] ，区间 [3,4] 有最小的“右”起点。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= intervals.length <= 2 * 10^4
 * intervals[i].length == 2
 * -10^6 <= starti <= endi <= 10^6
 * 每个间隔的起点都 不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const n = intervals.length
  const startIdxs = new Array(n).fill(0).map(() => new Array(2).fill(0))
  for (let i = 0; i < n; i++) {
    startIdxs[i][0] = intervals[i][0]
    startIdxs[i][1] = i
  }
  startIdxs.sort((a, b) => a[0] - b[0])
  const ans = new Array(n).fill(-1)
  for (let i = 0; i < n; i++) {
    let left = 0, right = n
    while (left < right) {
      const mid = left + right >> 1
      if (startIdxs[mid][0] < intervals[i][1]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    if (left < n) {
      ans[i] = startIdxs[left][1]
    }
  }
  return ans
};
// @lc code=end

