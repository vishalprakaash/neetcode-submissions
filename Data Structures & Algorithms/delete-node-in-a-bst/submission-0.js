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
     * @param {number} key
     * @return {TreeNode}
     */

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
    deleteNode(root, key) {
         if (root === null) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            // Found the node to delete
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Node has two children → replace with inorder successor
            let successor = this.findMin(root.right);
            root.val = successor.val;
            root.right = this.deleteNode(root.right, successor.val);
        }
        return root;
    }
}
