class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
   minDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;
        
        // Initialize a memoization table with -1 to indicate uncalculated states
        const memo = Array.from({ length: m }, () => Array(n).fill(-1));
        
        const dfs = (i, j) => {
            // Base cases: if one string is exhausted, 
            // return the number of remaining characters in the other string
            if (i === m) return n - j; // Need to insert remaining word2 chars
            if (j === n) return m - i; // Need to delete remaining word1 chars
            
            // Return cached result if already computed
            if (memo[i][j] !== -1) {
                return memo[i][j];
            }
            
            // If characters match, move both pointers (0 cost)
            if (word1[i] === word2[j]) {
                memo[i][j] = dfs(i + 1, j + 1);
            } else {
                // If they don't match, find the min cost among Insert, Delete, and Replace
                memo[i][j] = 1 + Math.min(
                    dfs(i, j + 1),    // Insert
                    dfs(i + 1, j),    // Delete
                    dfs(i + 1, j + 1) // Replace
                );
            }
            
            return memo[i][j];
        };
        
        // Start the recursion from the first character of both strings
        return dfs(0, 0);
    }
}
