class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(s1, s2) {
         const N = s1.length, M = s2.length;
        let dp = new Array(M+1).fill(0);

        for (let i = 0; i < N; i++) {
            let curr = new Array(M+1).fill(0);
            for (let j = 0; j < M; j++) {
                if (s1.charAt(i) == s2.charAt(j)) {
                    curr[j+1] =  1 + dp[j];
                } else {
                    curr[j+1] =  Math.max(dp[j+1], curr[j]);
                }
            }
            dp = curr
        }
        return dp[M];
    }
}
