class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
          // PHASE 1: Find if cycle exists and where they meet
            let slow = 0, fast = 0;
            
            do {
                slow = nums[slow];        // Jump 1 step
                fast = nums[nums[fast]];  // Jump 2 steps (nums[fast], then nums[that])
            } while (slow !== fast);     // Keep going until they meet
            
            // PHASE 2: Find the cycle entry point
            let slow2 = 0;  // Start a new pointer at beginning
            
            while (slow !== slow2) {
                slow = nums[slow];    // Move slow 1 step
                slow2 = nums[slow2];  // Move slow2 1 step
            }
            
            return slow;  // This is the duplicate
    }
}
