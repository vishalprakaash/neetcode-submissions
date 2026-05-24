class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.sum = [];
        for (let i = 0; i < nums.length; i++) {
        this.sum[i] = (i === 0 ? 0 : this.sum[i - 1]) + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
     sumRange(left, right) {
        return this.sum[right] - (left > 0 ? this.sum[left - 1] : 0);
    }
}
