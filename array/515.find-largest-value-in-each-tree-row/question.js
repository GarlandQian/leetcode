/**
 * 515.在每个树行中找最大值
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
 *
 * 示例1：
 * 输入: root = [1,3,2,5,3,null,9]
 * 输出: [1,3,9]
 * 示例2：
 * 输入: root = [1,2,3]
 * 输出: [1,3]
 *
 * 提示：
 * 	二叉树的节点个数的范围是 [0,104]
 * 	-231 <= Node.val <= 231 - 1
 *
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  const res = [],
    queue = []
  queue.push(root)
  if (!root) {
    return res
  }
  while (queue.length) {
    const len = queue.length
    let curl = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      curl.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(Math.max(...curl))
  }
  return res
}

/**
 * Test case
 */
showLogs(
  largestValues,
  {
    data: [[[1, 3, 2, 5, 3, null, 9]], [[1, 2, 3]]],
    structure: ['TreeNode'],
  },
  {
    data: [
      [1, 3, 9],
      [1, 3],
    ],
    structure: ['number[]'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/find-largest-value-in-each-tree-row/'
)
