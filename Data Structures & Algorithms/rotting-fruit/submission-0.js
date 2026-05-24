class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
      const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;

    // Initialize queue with all rotten fruits
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); // row, col, minute
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let minutes = 0;

    while (queue.length > 0) {
        const [r, c, time] = queue.shift();
        minutes = Math.max(minutes, time);

        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2;
                freshCount--;
                queue.push([nr, nc, time + 1]);
            }
        }
    }

    return freshCount === 0 ? minutes : -1;
    }
}
