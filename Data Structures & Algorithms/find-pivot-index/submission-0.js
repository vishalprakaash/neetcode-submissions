class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
         const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i; // found pivot index
        }
        leftSum += nums[i];
    }

    return -1; // no pivot index found
    }
}
