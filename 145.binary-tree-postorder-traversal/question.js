/**
 * 145.二叉树的后序遍历
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 *
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 * 示例 2：
 * 输入：root = []
 * 输出：[]
 * 示例 3：
 * 输入：root = [1]
 * 输出：[1]
 *
 * 提示：
 * 	树中节点的数目在范围 [0, 100] 内
 * 	-100 <= Node.val <= 100
 *
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
 * @description 左右中
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = []
  const loop = (node) => {
    if (!node) return
    loop(node.left)
    loop(node.right)
    res.push(node.val)
  }
  loop(root)
  return res
}

/**
 * @param {TreeNode} root
 * @description 入栈顺序： 中右左
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = []
  const stack = []
  if (root) {
    stack.push(root)
  }
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    stack.push(node)
    stack.push(null)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return res
}

/**
 * Test case
 */
showLogs(
  postorderTraversal,
  {
    data: [[[1, null, 2, 3]], [[]], [[1]]],
    structure: ['TreeNode'],
  },
  {
    data: [[3, 2, 1], [], [1]],
    structure: ['number[]'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/binary-tree-postorder-traversal/'
)
