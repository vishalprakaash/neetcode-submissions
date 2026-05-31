class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const n = s.length;
        const memo = Array.from({ length: n }, () => Array(n).fill(-1));

        const dfs = (l, r) => {
            if (l > r) return 0;
            if (l === r) return 1;

            if (memo[l][r] !== -1) return memo[l][r];

            if (s[l] === s[r]) {
                memo[l][r] = 2 + dfs(l + 1, r - 1);
            } else {
                memo[l][r] = Math.max(dfs(l + 1, r), dfs(l, r - 1));
            }

            return memo[l][r];
        };

        return dfs(0, n - 1);
    }
}
