class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
      const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return 0;
        grid[r][c] = 0; // mark visited
        let area = 1;
        area += dfs(r + 1, c);
        area += dfs(r - 1, c);
        area += dfs(r, c + 1);
        area += dfs(r, c - 1);
        return area;
    }

    let maxArea = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }
    return maxArea;
    }
}
