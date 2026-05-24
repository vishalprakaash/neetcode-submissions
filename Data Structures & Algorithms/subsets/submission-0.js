class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
           const result = [];
        const current = [];
        
        const backtrack = (index) => {
            if (index === nums.length) {
                result.push([...current]); // Make a copy
                return;
            }
            
            // Include nums[index]
            current.push(nums[index]);
            backtrack(index + 1);
            current.pop(); // Backtrack
            
            // Exclude nums[index]
            backtrack(index + 1);
        };
        
        backtrack(0);
        return result;
    }
}
