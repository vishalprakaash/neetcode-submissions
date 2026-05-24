/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */

    hasPathSum(root, targetSum) {
      const dfs = (node, currentSum) => {
        if(!node) return false

        currentSum += node.val

        if(!node.left && !node.right) {
          return currentSum === targetSum 
        }

        return dfs(node.left, currentSum) || dfs(node.right, currentSum)
      }
      return dfs(root, 0)
    }
}
