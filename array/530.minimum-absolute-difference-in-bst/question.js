/**
 * 530.二叉搜索树的最小绝对差
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 差值是一个正数，其数值等于两值之差的绝对值。
 *
 * 示例 1：
 * 输入：root = [4,2,6,1,3]
 * 输出：1
 * 示例 2：
 * 输入：root = [1,0,48,null,null,12,49]
 * 输出：1
 *
 * 提示：
 * 	树中节点的数目范围是 [2, 104]
 * 	0 <= Node.val <= 105
 *
 * 注意：本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Infinity
  let prev = void 0
  const loop = (node) => {
    if (!node) return
    loop(node.left)
    if (prev) min = Math.min(min, node.val - prev.val)
    prev = node
    loop(node.right)
  }
  loop(root)
  return min
}

/**
 * Test case
 */
showLogs(
  getMinimumDifference,
  {
    data: [[[4, 2, 6, 1, 3]], [[1, 0, 48, null, null, 12, 49]]],
    structure: ['TreeNode'],
  },
  {
    data: [1, 1],
    structure: ['number'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/minimum-absolute-difference-in-bst/'
)
