class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // Initialize with the first element
        let maxSum = nums[0];
        let currentSum = nums[0]; // Iterate through the rest of the array 
        for (let i = 1; i < nums.length; i++) { 
            // Either extend the current subarray or start fresh
            currentSum = Math.max(nums[i], currentSum + nums[i]); 
            // Update maxSum if needed
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}
