class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
      const n = grid.length;
      const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

      // Min-heap keyed by current path's maximum elevation (cost)
      class MinHeap {
        constructor() { this.h = []; }
        size() { return this.h.length; }
        push(item) {
          this.h.push(item);
          this._up(this.h.length - 1);
        }
        pop() {
          if (!this.h.length) return null;
          if (this.h.length === 1) return this.h.pop();
          const top = this.h[0];
          this.h[0] = this.h.pop();
          this._down(0);
          return top;
        }
        _up(i) {
          while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.h[i][2] < this.h[p][2]) {
              [this.h[i], this.h[p]] = [this.h[p], this.h[i]];
              i = p;
            } else break;
          }
        }
        _down(i) {
          const n = this.h.length;
          while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, smallest = i;
            if (l < n && this.h[l][2] < this.h[smallest][2]) smallest = l;
            if (r < n && this.h[r][2] < this.h[smallest][2]) smallest = r;
            if (smallest !== i) {
              [this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]];
              i = smallest;
            } else break;
          }
        }
      }

      const seen = Array.from({ length: n }, () => Array(n).fill(false));
      const heap = new MinHeap();
      heap.push([0, 0, grid[0][0]]); // [r, c, cost = max elevation along path]

      while (heap.size()) {
        const [r, c, cost] = heap.pop();
        if (seen[r][c]) continue;
        seen[r][c] = true;
        if (r === n - 1 && c === n - 1) return cost;
        for (const [dr, dc] of dirs) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < n && nc >= 0 && nc < n && !seen[nr][nc]) {
            const nextCost = Math.max(cost, grid[nr][nc]);
            heap.push([nr, nc, nextCost]);
          }
        }
      }

    return -1; // unreachable (the problem guarantees reachability, so this is defensive)
  }
}
