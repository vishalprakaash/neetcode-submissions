class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
   findTargetSumWays(nums, target) {
        const dp = new Map();

        const dfs = (i, sum) => {
            if (i === nums.length) {
                return sum === target ? 1 : 0;
            }
            const key = `${i},${sum}`;
            if (dp.has(key)) return dp.get(key);

            const ways = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);
            dp.set(key, ways);
            return ways;
        };

        return dfs(0, 0);
    }
}
