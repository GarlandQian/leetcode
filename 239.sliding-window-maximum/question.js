/**
 * 239.滑动窗口最大值
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回 滑动窗口中的最大值 。
 *
 * 示例 1：
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 * 示例 2：
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 * 提示：
 * 	1 <= nums.length <= 105
 * 	-104 <= nums[i] <= 104
 * 	1 <= k <= nums.length
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class Queue {
    queue
    constructor(value) {
      this.queue = value
    }
    front() {
      return this.queue[0]
    }
    pop(value) {
      const front = this.front()
      if (front == value) {
        this.queue.shift()
      }
    }
    push(value) {
      let back = this.queue[this.queue.length - 1]
      while (back != undefined && back < value) {
        this.queue.pop()
        back = this.queue[this.queue.length - 1]
      }
      this.queue.push(value)
    }
  }
  const queue = new Queue([])
  const res = []
  let i = 0,
    j = 0
  while (j < k) {
    queue.push(nums[j])
    j++
  }
  res.push(queue.front())
  while (j < nums.length) {
    queue.push(nums[j])
    queue.pop(nums[i])
    res.push(queue.front())
    i++, j++
  }
  return res
}

/**
 * Test case
 */
showLogs(
  maxSlidingWindow,
  {
    data: [
      [[1, 3, -1, -3, 5, 3, 6, 7], 3],
      [[1], 1],
    ],
    structure: ['number[]', 'number'],
  },
  {
    data: [[3, 3, 5, 5, 6, 7], [1]],
    structure: ['number[]'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/sliding-window-maximum/'
)
