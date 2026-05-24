class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
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
            while (index + 1 < nums.length && nums[index] === nums[index+1]) {
                index++;
            }
            backtrack(index + 1);
        };
        
        backtrack(0);
        return result;
    }
}
