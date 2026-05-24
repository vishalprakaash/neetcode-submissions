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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preorderIndex = 0;
        const inorderMap = new Map();
        inorder.forEach((val, idx) => inorderMap.set(val, idx));

       const arrayToTree = (left, right) => {
            if (left > right) return null;

            const rootVal = preorder[preorderIndex++];
            const root = new TreeNode(rootVal);

            const inorderIndex = inorderMap.get(rootVal);
            if (inorderIndex === undefined) {
            throw new Error("Invalid input: value not found in inorder");
            }

            root.left = arrayToTree(left, inorderIndex - 1);
            root.right = arrayToTree(inorderIndex + 1, right);

            return root;
        }
        return arrayToTree(0, inorder.length - 1)
    }
}
