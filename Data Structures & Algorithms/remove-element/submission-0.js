class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let finalLength = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                nums[finalLength] = nums[i]
                finalLength++;
            }
        }
        return finalLength;
    }
}
