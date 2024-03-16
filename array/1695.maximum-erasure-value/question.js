/**
 * 1695.删除子数组的最大得分
 * 给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。
 * 返回 只删除一个 子数组可获得的 最大得分 。
 * 如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。
 *
 * 示例 1：
 * 输入：nums = [4,2,4,5,6]
 * 输出：17
 * 解释：最优子数组是 [2,4,5,6]
 * 示例 2：
 * 输入：nums = [5,2,1,2,5,2,1,2,5]
 * 输出：8
 * 解释：最优子数组是 [5,2,1] 或 [1,2,5]
 *
 * 提示：
 * 	1 5
 * 	1 4
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let [left, right, max, current, numMap] = [0, 0, 0, 0, new Map()]
  while (right < nums.length) {
    // 如果当前没有重复元素，右指针一直向右
    const rightValue = nums[right]
    numMap.set(rightValue, (numMap.get(rightValue) ?? 0) + 1)
    current += rightValue
    // 出现重复元素，左指针向右移动
    while (numMap.get(rightValue) > 1) {
      let leftValue = nums[left]
      numMap.set(leftValue, numMap.get(leftValue) - 1)
      current -= leftValue
      left++
    }
    max = Math.max(max, current)
    right++
  }
  return max
}

/**
 * Test case
 */
showLogs(
  maximumUniqueSubarray,
  {
    data: [[[4, 2, 4, 5, 6]], [[5, 2, 1, 2, 5, 2, 1, 2, 5]]],
    structure: ['number[]'],
  },
  {
    data: [17, 8],
    structure: ['number'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/maximum-erasure-value/'
)
