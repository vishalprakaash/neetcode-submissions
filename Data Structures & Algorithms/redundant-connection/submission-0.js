class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
      const parent = Array(edges.length + 1).fill(0).map((_, i) => i);
      const rank = Array(edges.length + 1).fill(1);
      console.log(parent, rank)

      function find(n) {
        if (parent[n] !== n) {
          parent[n] = find(parent[n]); // path compression
        }
        return parent[n];
      }

      function union(n1, n2) {
        const p1 = find(n1);
        const p2 = find(n2);
        console.log("Inside union",p1, n1, p2, n2)

        if (p1 === p2) return false; // cycle detected

        if (rank[p1] > rank[p2]) {
          parent[p2] = p1;
          rank[p1] += rank[p2];
        } else {
          parent[p1] = p2;
          rank[p2] += rank[p1];
        }
        return true;
      }

      for (let [u, v] of edges) {
        if (!union(u, v)) {
          return [u, v];
        }
      }
    }
}
