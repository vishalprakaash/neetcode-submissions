class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
     findMaxForm(strs, m, n) {
        // dp[i][j] = max subset size with at most i zeros and j ones
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (const s of strs) {
            // Count zeros and ones in this string
            let zeros = 0, ones = 0;
            for (const c of s) {
                if (c === '0') zeros++;
                else ones++;
            }

            // 0/1 knapsack: iterate backwards to avoid reuse
            for (let i = m; i >= zeros; i--) {
                for (let j = n; j >= ones; j--) {
                    dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zeros][j - ones]);
                }
            }
        }

        return dp[m][n];
    }
}
