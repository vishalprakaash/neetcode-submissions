class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
       let dp = Array.from({length: amount + 1}, () => Infinity);
        dp[0] = 0
       for(let i = 1; i <= amount; i++) {
            for(let coin of coins) {
                let act = i-coin;
                if(act < 0) continue;
                dp[i] = Math.min(dp[i], dp[act] + 1)
            }
       }
       return dp[amount] === Infinity ? -1 : dp[amount]
    }
}