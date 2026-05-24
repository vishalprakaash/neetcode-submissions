class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
      const n = grid.length;
    if (grid[0][0] !== 0 || grid[n-1][n-1] !== 0) return -1;

    const directions = [
        [1,0], [-1,0], [0,1], [0,-1],
        [1,1], [1,-1], [-1,1], [-1,-1]
    ];

    const queue = [[0, 0, 1]]; // row, col, path length
    grid[0][0] = 1; // mark visited

    while (queue.length > 0) {
        const [r, c, dist] = queue.shift();
        if (r === n-1 && c === n-1) return dist;

        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < n && nc < n && grid[nr][nc] === 0) {
                grid[nr][nc] = 1; // mark visited
                queue.push([nr, nc, dist + 1]);
            }
        }
    }
    return -1;
    }
}
