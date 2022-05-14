/*
 * @lc app=leetcode.cn id=691 lang=javascript
 *
 * [691] 贴纸拼词
 *
 * https://leetcode-cn.com/problems/stickers-to-spell-word/description/
 *
 * algorithms
 * Hard (47.27%)
 * Likes:    212
 * Dislikes: 0
 * Total Accepted:    18.2K
 * Total Submissions: 29.5K
 * Testcase Example:  '["with","example","science"]\n"thehat"'
 *
 * 我们有 n 种不同的贴纸。每个贴纸上都有一个小写的英文单词。
 * 
 * 您想要拼写出给定的字符串 target ，方法是从收集的贴纸中切割单个字母并重新排列它们。如果你愿意，你可以多次使用每个贴纸，每个贴纸的数量是无限的。
 * 
 * 返回你需要拼出 target 的最小贴纸数量。如果任务不可能，则返回 -1 。
 * 
 * 注意：在所有的测试用例中，所有的单词都是从 1000 个最常见的美国英语单词中随机选择的，并且 target 被选择为两个随机单词的连接。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入： stickers = ["with","example","science"], target = "thehat"
 * 输出：3
 * 解释：
 * 我们可以使用 2 个 "with" 贴纸，和 1 个 "example" 贴纸。
 * 把贴纸上的字母剪下来并重新排列后，就可以形成目标 “thehat“ 了。
 * 此外，这是形成目标字符串所需的最小贴纸数量。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：stickers = ["notice","possible"], target = "basicbasic"
 * 输出：-1
 * 解释：我们不能通过剪切给定贴纸的字母来形成目标“basicbasic”。
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * n == stickers.length
 * 1 <= n <= 50
 * 1 <= stickers[i].length <= 10
 * 1 <= target <= 15
 * stickers[i] 和 target 由小写英文单词组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
function minStickers(stickers, target) {
  let N = stickers.length,
    counts = Array(N).fill(0).map(() => Array(26).fill(0)),
    aCode = 'a'.charCodeAt(),
    dp = new Map();
  for (let i = 0; i < N; i++) {
    let sticker = stickers[i];
    for (let cha of sticker) {
      counts[i][cha.charCodeAt() - aCode]++;
    }
  }
  dp.set('', 0); // 根据base-case初始化空串的情况
  let ans = process3(counts, target, dp);
  return ans == Number.MAX_SAFE_INTEGER ? -1 : ans;
}
function process3(stickers, target, dp) {
  // 判断缓存是否命中
  if (dp.has(target)) {
    return dp.get(target);
  }
  // 目标词频
  let tcounts = Array(26).fill(0),
    aCode = 'a'.charCodeAt(),
    N = stickers.length,
    min = Number.MAX_SAFE_INTEGER;
  for (let cha of target) {
    tcounts[cha.charCodeAt() - aCode]++;
  }
  // 遍历贴纸，选出包含首字符的项，递减词频选出最小值
  for (let i = 0; i < N; i++) {
    let sticker = stickers[i];
    if (sticker[target[0].charCodeAt() - aCode] > 0) {
      let rest = '';
      for (let j = 0; j < 26; j++) {
        if (tcounts[j] > 0) {
          let diff = tcounts[j] - sticker[j], // ! 由于是求剩余字符拼接，所以是负数也没事，就等同于全都消除了
            cha = String.fromCharCode(j + aCode);
          for (let k = 0; k < diff; k++) {
            rest += cha;
          }
        }
      }
      min = Math.min(min, process3(stickers, rest, dp));
    }
  }
  let ans = min + (min == Number.MAX_SAFE_INTEGER ? 0 : 1);
  // 缓存结果
  dp.set(target, ans);
  // 返回值需要加上当前贴纸
  return ans;
}
// @lc code=end

