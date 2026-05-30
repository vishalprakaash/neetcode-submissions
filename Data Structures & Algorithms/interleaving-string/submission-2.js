class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) {
            return false;
        }

        const n = s1.length;
        const m = s2.length;

        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

        dp[n][m] = true;

        for (let i = n; i >= 0; i--) {
            for (let j = m; j >= 0; j--) {
                if (i === n && j === m) continue;

                const k = i + j; // index in s3

                if (i < n && s1[i] === s3[k] && dp[i + 1][j]) {
                    dp[i][j] = true;
                }

                if (j < m && s2[j] === s3[k] && dp[i][j + 1]) {
                    dp[i][j] = true;
                }
            }
        }

        return dp[0][0];
    }
}
