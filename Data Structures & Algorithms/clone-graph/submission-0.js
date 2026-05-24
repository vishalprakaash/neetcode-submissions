/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const visited = new Map();

        function dfs(curr) {
            if (visited.has(curr)) {
                return visited.get(curr);
            }

            const clone = new Node(curr.val);
            visited.set(curr, clone);

            for (const neighbor of curr.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        }

        return dfs(node);
    }
}