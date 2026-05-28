class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
       if (amount === 0) return 0;

        let minCount = Infinity;
        let cache = {};

        const dfs = (idx, sum, count) => {
            if (idx >= coins.length || sum > amount || count >= minCount) return;

            const key = `${idx},${sum}`;
            if (cache[key] !== undefined && cache[key] <= count) return;
            cache[key] = count;

            if (sum === amount) {
                minCount = Math.min(minCount, count);
                return;
            }

            // include current coin
            dfs(idx, sum + coins[idx], count + 1);

            // skip current coin
            dfs(idx + 1, sum, count);
        };

        dfs(0, 0, 0);

        return minCount === Infinity ? -1 : minCount;
    }
}

