class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        /* Approach one DP without optimization */
        // let memory = {}
        // function memoizedFunction(r,c) {
        //     if(r >= m || c>= n) return 0;
        //     if(memory[`${r},${c}`] !== undefined) return memory[`${r},${c}`]; 
        //     if(r === m-1 && c === n-1) return 1;

        //     memory[`${r},${c}`] = memoizedFunction(r + 1, c) + memoizedFunction(r, c + 1)
        //     return memory[`${r},${c}`]
        // }

        // return memoizedFunction(0,0)
        
        /* Approach one DP  optimization */
        
        let prevRow = new Array(n).fill(0); 
        for (let i = m - 1; i >= 0; i--) {
            let curRow = new Array(n).fill(0);
            curRow[n - 1] = 1;
            for (let j = n - 2; j >= 0; j--) {
                curRow[j] = curRow[j + 1] + prevRow[j];
            }
            prevRow = curRow;
        } 
        return prevRow[0];
    }
}
