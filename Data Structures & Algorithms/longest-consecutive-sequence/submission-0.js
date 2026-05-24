class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      if (nums.length === 0) return 0;

      const parent = new Map();
      const rank = new Map();
      let maxSequence = 1;

      // Initialize: Each number is its own parent with a rank (size) of 1
      for (const n of nums) {
          if (!parent.has(n)) {
              parent.set(n, n);
              rank.set(n, 1);
          }
      }

      function find(n) {
          if (parent.get(n) !== n) {
              parent.set(n, find(parent.get(n))); // path compression
          }
          return parent.get(n);
      }

      function union(n1, n2) {
          const p1 = find(n1);
          const p2 = find(n2);

          if (p1 !== p2) {
              // Union by Rank (using rank to store the count of elements)
              if (rank.get(p1) > rank.get(p2)) {
                  parent.set(p2, p1);
                  rank.set(p1, rank.get(p1) + rank.get(p2));
                  maxSequence = Math.max(maxSequence, rank.get(p1));
              } else {
                  parent.set(p1, p2);
                  rank.set(p2, rank.get(p2) + rank.get(p1));
                  maxSequence = Math.max(maxSequence, rank.get(p2));
              }
          }
      }

      for (const n of nums) {
          if (parent.has(n + 1)) {
              union(n, n + 1);
          }
      }

      return maxSequence;
    }
}
