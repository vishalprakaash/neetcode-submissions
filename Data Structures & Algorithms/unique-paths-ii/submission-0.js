class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let m =grid.length
        let n = grid[0].length
        let prevRow = new Array(n).fill(0); 
        for (let i = m - 1; i >= 0; i--) {
            let currRow = new Array(n).fill(0);
            let givenRow = grid[i]
             
            if (i === m - 1) currRow[n - 1] = 1;
            else currRow[n - 1] = prevRow[n - 1];

            if(givenRow[n-1] === 1) currRow[n-1] = 0
            for (let j = n - 2; j >= 0; j--) {
                if(givenRow[j] === 1) continue;
                currRow[j] = currRow[j + 1] + prevRow[j];
            }
            prevRow = currRow;
        }
        return prevRow[0];
    }
}
