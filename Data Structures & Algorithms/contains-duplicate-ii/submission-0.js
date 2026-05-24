class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set();
       for (let i = 0; i < nums.length; i++) {
            // If the number already exists in the set, we found a duplicate within k distance
            if (set.has(nums[i])) { return true; } // Add the current number to the set
            set.add(nums[i]); // Maintain the sliding window size of k
            if (set.size > k) { 
                // Remove the element that is out of the window
                set.delete(nums[i - k]);
            }
        } // If no duplicates found within k distance
     return false;
    }
}
