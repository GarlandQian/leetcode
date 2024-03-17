/**
 * 5.最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 *
 * 示例 1：
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 示例 2：
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 * 提示：
 * 	1 <= s.length <= 1000
 * 	s 仅由数字和英文字母组成
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0
  let start = -1
  const len = s.length
  for (let i = 0; i < len; i++) {
    let now = 1
    let l = i - 1
    while (s[i + 1] == s[i]) {
      now++
      i++
    }
    let r = i + 1
    while (s[l] === s[r] && s[l] !== void 0) {
      now += 2
      l--
      r++
    }
    if (now > max) {
      max = now
      start = l + 1
    }
  }
  return s.slice(start, start + max)
}

/**
 * Test case
 */
showLogs(
  longestPalindrome,
  {
    data: [['babad'], ['cbbd']],
    structure: ['string'],
  },
  {
    data: ['bab', 'bb'],
    structure: ['string'],
  }
)
console.log(
  '点击跳转到题目提交:https://leetcode.cn/problems/longest-palindromic-substring/'
)
