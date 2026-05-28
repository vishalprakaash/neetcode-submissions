class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
         if (amount === 0) return 1;

        let cache = {};

        const dfs = (idx, sum) => {
            if (sum === amount) return 1;
            if (idx >= coins.length || sum > amount) return 0;

            const key = `${idx},${sum}`;
            if (cache[key] !== undefined) return cache[key];

            // include current coin + skip current coin
            let res = dfs(idx, sum + coins[idx]) + dfs(idx + 1, sum);
            
            cache[key] = res;
            return res;
        };

        return dfs(0, 0);
    }
}