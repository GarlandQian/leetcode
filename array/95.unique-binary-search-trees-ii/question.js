/**
 * 95.不同的二叉搜索树 II
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 *
 * 示例 1：
 * 输入：n = 3
 * 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 * 示例 2：
 * 输入：n = 1
 * 输出：[[1]]
 *
 * 提示：
 * 	1
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) return []
  const memo = new Array(n + 1)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n + 1)
  }
  const loop = (low, high) => {
    if (low < high) return
    if (memo[low][high]) return memo[low][high]
    if (low == high) return [new TreeNode(low)]
    const res = []
    for (let i = low; i <= high; i++) {
      const lefts = loop(low, i - 1)
      const rights = loop(i + 1, high)
      for (let left of lefts) {
        for (let right of rights) {
          const node = new TreeNode(i)
          node.left = left
          node.right = right
        }
      }
    }
    return memo(low, high)
  }
  return loop(1,n)
}

/**
 * Test case
 */
showLogs(
  generateTrees,
  {
    data: [[3], [1]],
    structure: ['number'],
  },
  {
    data: [
      [
        [1, null, 2, null, 3],
        [1, null, 3, 2],
        [2, 1, 3],
        [3, 1, null, null, 2],
        [3, 2, null, 1],
      ],
      [[1]],
    ],
    structure: ['TreeNode[]'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/unique-binary-search-trees-ii/'
)
