class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = 0;
        for (let num of nums) sum += num;
        if (sum % 2 !== 0) return false;
        let target = sum / 2;

        let dp = new Set([0]);
        for (let num of nums) {
            let nextDp = new Set(dp);
            for (let s of dp) {
                if (s + num === target) return true;
                if (s + num < target) nextDp.add(s + num);
            }
            dp = nextDp;
        }

        return false;
    }
}