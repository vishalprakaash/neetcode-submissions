class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];
        for (let i = 0; i <= n; i++) {
            let count = 0;
            let num = i;
            while (num > 0) {
                count += num & 1;
                num >>= 1;
            }
            res.push(count);
        }
        return res;
    }
}