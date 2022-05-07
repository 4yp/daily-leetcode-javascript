/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 *
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/description/
 *
 * algorithms
 * Medium (53.47%)
 * Likes:    199
 * Dislikes: 0
 * Total Accepted:    40K
 * Total Submissions: 72.8K
 * Testcase Example:  '"AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]'
 *
 * 基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。
 * 
 * 假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。
 * 
 * 
 * 例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
 * 
 * 
 * 另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。
 * 
 * 给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end
 * 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。
 * 
 * 注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：start = "AACCGGTT", end = "AAACGGTA", bank =
 * ["AACCGGTA","AACCGCTA","AAACGGTA"]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：start = "AAAAACCC", end = "AACCCCCC", bank =
 * ["AAAACCCC","AAACCCCC","AACCCCCC"]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * start.length == 8
 * end.length == 8
 * 0 <= bank.length <= 10
 * bank[i].length == 8
 * start、end 和 bank[i] 仅由字符 ['A', 'C', 'G', 'T'] 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1
  let queue = [[start, 0]]
  let dna = ['A', 'C', 'G', 'T']
  while (queue.length) {
    let [node, count] = queue.shift()
    if (node === end) return count
    for (let i = 0; i < node.length; i++) {
      for (let j = 0; j < dna.length; j++) {
        let d = node.slice(0, i) + dna[j] + node.slice(i + 1)
        if (bankSet.has(d)) {
          queue.push([d, count + 1])
          bankSet.delete(d)
        }
      }
    }
  }
  return -1
};
// @lc code=end

