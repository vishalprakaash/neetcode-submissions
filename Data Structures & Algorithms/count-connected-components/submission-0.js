class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
      const parent = Array(n).fill(0).map((_, i) => i);
      const rank = Array(n).fill(1);

      function find(n) {
        if (parent[n] !== n) {
          parent[n] = find(parent[n]); // path compression
        }
        return parent[n];
      }

      function union(n1, n2) {
        const p1 = find(n1);
        const p2 = find(n2);

        if (p1 !== p2) {
          parent[p2] = p1
        }
      }

      for (let [u, v] of edges) {
        union(u, v)
      }

      // Count distinct roots
      const roots = new Set();
      for (let i = 0; i < n; i++) {
        roots.add(find(i));
      }

      return roots.size;
    }
}
