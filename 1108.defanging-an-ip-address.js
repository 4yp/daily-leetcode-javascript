/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 *
 * https://leetcode.cn/problems/defanging-an-ip-address/description/
 *
 * algorithms
 * Easy (83.82%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    98.6K
 * Total Submissions: 115.2K
 * Testcase Example:  '"1.1.1.1"'
 *
 * Given a valid (IPv4) IP address, return a defanged version of that IP
 * address.
 * 
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * 
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 * 
 * 
 * Constraints:
 * 
 * 
 * The given address is a valid IPv4 address.
 * 
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace('.', '[.]')
};
// @lc code=end

