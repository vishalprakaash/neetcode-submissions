class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(num) {
        let memo = new Map();

        function dfs(n) {
            if(n === 0) {
                return 1;
            }
            if (memo.has(n)) return memo.get(n);
            let res = 0;
            if(n >= 2) {
                res += dfs(n-2)
            }
            if(n >=1) {
                res += dfs(n-1)
            }
            memo.set(n, res);
            return res;
        }

        return dfs(num)
    }
}