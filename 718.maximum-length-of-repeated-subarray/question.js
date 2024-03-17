/**
 * 718.最长重复子数组
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * 输出：3
 * 解释：长度最长的公共子数组是 [3,2,1] 。
 * 示例 2：
 * 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * 输出：5
 *
 * 提示：
 * 	1 <= nums1.length, nums2.length <= 1000
 * 	0 <= nums1[i], nums2[i] <= 100
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map((item) => new Array(nums2.length + 1).fill(0))
  let max = 0
  // dp[i][j]  以i-1结尾的nums1和以j-1结尾的nums2的最大公共子数组
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
        // 遇到A[i - 1] === B[j - 1]，则更新dp数组
        if (nums1[i - 1] === nums2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        // 更新res
        max = dp[i][j] > max ? dp[i][j] : max;
    }
}
  return max
}

/**
 * Test case
 */
showLogs(
  findLength,
  {
    data: [
      [(nums1 = [1, 2, 3, 2, 1]), (nums2 = [3, 2, 1, 4, 7])],
      [(nums1 = [0, 0, 0, 0, 0]), (nums2 = [0, 0, 0, 0, 0])],
    ],
    structure: ['number[]', 'number[]'],
  },
  {
    data: [3, 5],
    structure: ['number'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/maximum-length-of-repeated-subarray/'
)
