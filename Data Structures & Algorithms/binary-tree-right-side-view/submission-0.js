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
    rightSideView(root) {
        let res = []
        if(!root) return res
        let queue = [root];
        let final = [];
        while(queue.length > 0) {
            let level = [];
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                level.push(node.val);
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            res.push(level)
        }

        for (let i = 0; i < res.length; i++) {
            const levelArr = res[i]
            final.push(levelArr[levelArr.length -1])
        }
        return final
    }
}
