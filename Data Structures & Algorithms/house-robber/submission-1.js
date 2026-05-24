class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
      if (nums.length === 0) return 0;
      if (nums.length === 1) return nums[0];

      // prev1 = max loot up to previous house
      // prev2 = max loot up to house before previous
      let prev1 = 0, prev2 = 0;
      for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1); // rob or skip
        prev2 = temp;
      }

      return prev1;
    }
}
