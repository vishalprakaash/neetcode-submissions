class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        // Helper: Kadane’s algorithm for max subarray
        const kadaneMax = (arr) => {
            let maxSum = arr[0], currentSum = arr[0];
            for (let i = 1; i < arr.length; i++) {
                currentSum = Math.max(arr[i], currentSum + arr[i]);
                maxSum = Math.max(maxSum, currentSum);
            }
            return maxSum;
        };
        
        // Helper: Kadane’s algorithm for min subarray
        const kadaneMin = (arr) => {
            let minSum = arr[0], currentSum = arr[0];
            for (let i = 1; i < arr.length; i++) {
                currentSum = Math.min(arr[i], currentSum + arr[i]);
                minSum = Math.min(minSum, currentSum); 
            } 
            return minSum;
        };
        
        const totalSum = nums.reduce((a, b) => a + b, 0);
        const maxNormal = kadaneMax(nums);
        const minSubarray = kadaneMin(nums); // Edge case: if all numbers are negative, return maxNormal 
        console.log({maxNormal, totalSum, minSubarray})
        if (maxNormal < 0) return maxNormal; // Otherwise, max of normal vs circular 
        return Math.max(maxNormal, totalSum - minSubarray);
    }
}
