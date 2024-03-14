/**
 * 18.四数之和
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 	0 <= a, b, c, d < n
 * 	a、b、c 和 d 互不相同
 * 	nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。
 *
 * 示例 1：
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 示例 2：
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 * 提示：
 * 	1 <= nums.length <= 200
 * 	-109 <= nums[i] <= 109
 * 	-109 <= target <= 109
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const asc = nums.sort((a, b) => a - b)
  const sumTarget = (nums, n, start, target) => {
    let size = nums.length
    let res = []
    if (n < 2 || size < n) return res
    if (n == 2) {
      let left = start,
        right = size - 1
      while (left < right) {
        const sum = nums[left] + nums[right]
        const leftvalue = nums[left],
          rightvalue = nums[right]
        if (sum == target) {
          res.push([leftvalue, rightvalue])
          while (left < right && nums[right] == rightvalue) right--
          while (left < right && nums[left] == leftvalue) left++
        } else if (sum > target) {
          while (left < right && nums[right] == rightvalue) right--
        } else if (sum < target) {
          while (left < right && nums[left] == leftvalue) left++
        }
      }
    } else {
      for (let i = start; i < size; i++) {
        const sub = sumTarget(nums, n - 1, i + 1, target - nums[i])
        for (let arr of sub) {
          arr.push(nums[i])
          res.push(arr)
        }
        while (i < size - 1 && nums[i] == nums[i + 1]) i++
      }
    }
    return res
  }
  return sumTarget(asc, 4, 0, target)
}

/**
 * Test case
 */
showLogs(
  fourSum,
  {
    data: [
      [[1, 0, -1, 0, -2, 2], 0],
      [[2, 2, 2, 2, 2], 8],
    ],
    structure: ['number[]', 'number'],
  },
  {
    data: [
      [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
      [[2, 2, 2, 2]],
    ],
    structure: ['number[][]'],
  }
)
console.log('点击跳转到题目提交:https://leetcode.cn/problems/4sum/')
