/**
 * 199.二叉树的右视图
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 * 示例 1:
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1,3,4]
 * 示例 2:
 * 输入: [1,null,3]
 * 输出: [1,3]
 * 示例 3:
 * 输入: []
 * 输出: []
 *
 * 提示:
 * 	二叉树的节点个数的范围是 [0,100]
 * 	-100
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
var rightSideView = function (root) {
  let res = [],
    queue = [root]
  if (!root) return []
  while (queue.length) {
    let len = queue.length
    let curl = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      curl.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curl[curl.length - 1])
  }
  return res
}

/**
 * Test case
 */
showLogs(
  rightSideView,
  {
    data: [[[1, 2, 3, null, 5, null, 4]], [[1, null, 3]], [[]]],
    structure: ['TreeNode'],
  },
  {
    data: [[1, 3, 4], [1, 3], []],
    structure: ['number[]'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/binary-tree-right-side-view/'
)
