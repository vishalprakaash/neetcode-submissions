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
    postorderTraversal(root) {
        if (!root) return [];
        const stack = [root];
        const result = [];

        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.val);

            // Push children: left first, then right
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        // Reverse result to get postorder
        return result.reverse();
    }
}
