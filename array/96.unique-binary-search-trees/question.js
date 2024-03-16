/**
 * 96.不同的二叉搜索树
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 *
 * 示例 1：
 * 输入：n = 3
 * 输出：5
 * 示例 2：
 * 输入：n = 1
 * 输出：1
 *
 * 提示：
 * 	1
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  // dp[2] = dp[1]*dp[0] + dp[0]*dp[1]
  // dp[3] = dp[2]*dp[0] + dp[1]*dp[1] + dp[0]*dp[2]

  for(let i = 2; i <=n; i++) {
    for(let j = 1; j <=i; j++) {
      dp[i] += dp[j -1] * dp[i - j]
    }
  }

  return dp[n]
}

/**
 * Test case
 */
showLogs(
  numTrees,
  {
    data: [[3], [1]],
    structure: ['number'],
  },
  {
    data: [5, 1],
    structure: ['number'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/unique-binary-search-trees/'
)
