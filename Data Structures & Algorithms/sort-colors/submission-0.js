class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucket = [0, 0, 0];


        for (let num of nums) {
            bucket[num]++;
        }

        // Step 3: Overwrite nums based on bucket counts
        let index = 0;
        for (let color = 0; color < 3; color++) {
            for (let count = 0; count < bucket[color]; count++) {
                nums[index++] = color;
            }
        }
    }
}
