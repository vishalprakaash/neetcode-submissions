class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

       function backtrack(start, path, total) {
            if (total === target) {
                result.push([...path]);
                return;
            }
            if (total > target) return;
            
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i, path, total + nums[i]); // reuse allowed
                path.pop();
            }
        }
        
        backtrack(0, [], 0);
        return result;
    }

    
}
