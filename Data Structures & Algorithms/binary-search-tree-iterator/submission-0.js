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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */

    constructor(root) {
    this.stack = [];
    this._pushLeft(root);
    }

    // Helper: push all left children
    _pushLeft(node) {
      while (node) {
        this.stack.push(node);
        node = node.left;
      }
    }

    /**
     * @return {number}
     */
    next() {
      const node = this.stack.pop();
      if (node.right) {
        this._pushLeft(node.right);
      }
      return node.val;
    }

    hasNext() {
      return this.stack.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
