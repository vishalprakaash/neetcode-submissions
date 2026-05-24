class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {

        function findPossiblePaths(i, sum) {
            if(i > nums.length) return 0;
            if(i === nums.length && sum === target) return 1;
            return findPossiblePaths(i+1, sum + nums[i]) + findPossiblePaths(i+1, sum - nums[i])
        }
        return findPossiblePaths(0, 0)
    }
}
