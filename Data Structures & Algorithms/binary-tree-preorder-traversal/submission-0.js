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
     * @return {number[]}
     */
    preorderTraversal(root) {
         if (!root) return [];
    const stack = [root];
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        // Push right first so left is processed first
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
    }
}
