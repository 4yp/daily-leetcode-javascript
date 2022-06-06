/*
 * @lc app=leetcode.cn id=732 lang=javascript
 *
 * [732] My Calendar III
 *
 * https://leetcode.cn/problems/my-calendar-iii/description/
 *
 * algorithms
 * Hard (72.05%)
 * Likes:    149
 * Dislikes: 0
 * Total Accepted:    15.5K
 * Total Submissions: 21.5K
 * Testcase Example:  '["MyCalendarThree","book","book","book","book","book","book"]\n' +
  '[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]'
 *
 * A k-booking happens when k events have some non-empty intersection (i.e.,
 * there is some time that is common to all k events.)
 * 
 * You are given some events [start, end), after each given event, return an
 * integer k representing the maximum k-booking between all the previous
 * events.
 * 
 * Implement the MyCalendarThree class:
 * 
 * 
 * MyCalendarThree() Initializes the object.
 * int book(int start, int end) Returns an integer k representing the largest
 * integer such that there exists a k-booking in the calendar.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["MyCalendarThree", "book", "book", "book", "book", "book", "book"]
 * [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
 * Output
 * [null, 1, 1, 2, 3, 3, 3]
 * 
 * Explanation
 * MyCalendarThree myCalendarThree = new MyCalendarThree();
 * myCalendarThree.book(10, 20); // return 1, The first event can be booked and
 * is disjoint, so the maximum k-booking is a 1-booking.
 * myCalendarThree.book(50, 60); // return 1, The second event can be booked
 * and is disjoint, so the maximum k-booking is a 1-booking.
 * myCalendarThree.book(10, 40); // return 2, The third event [10, 40)
 * intersects the first event, and the maximum k-booking is a 2-booking.
 * myCalendarThree.book(5, 15); // return 3, The remaining events cause the
 * maximum K-booking to be only a 3-booking.
 * myCalendarThree.book(5, 10); // return 3
 * myCalendarThree.book(25, 55); // return 3
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= start < end <= 10^9
 * At most 400 calls will be made to book.
 * 
 * 
 */

// @lc code=start

var MyCalendarThree = function () {
  this.tree = new Map();
  this.lazy = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */

MyCalendarThree.prototype.book = function (start, end) {
  this.update(start, end - 1, 0, 1000000000, 1);
  return this.tree.get(1) || 0;
};

MyCalendarThree.prototype.update = function (start, end, l, r, idx) {
  if (r < start || end < l) {
    return;
  }
  if (start <= l && r <= end) {
    this.tree.set(idx, (this.tree.get(idx) || 0) + 1);
    this.lazy.set(idx, (this.lazy.get(idx) || 0) + 1);
  } else {
    const mid = (l + r) >> 1;
    this.update(start, end, l, mid, 2 * idx);
    this.update(start, end, mid + 1, r, 2 * idx + 1);
    this.tree.set(idx, (this.lazy.get(idx) || 0) + Math.max((this.tree.get(2 * idx) || 0), (this.tree.get(2 * idx + 1) || 0)));
  }
}
/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

