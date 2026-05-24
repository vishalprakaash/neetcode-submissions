/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 1;
        let right = n;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            let res = guess(mid);

            if (res === 0) {
                return mid; // found the target
            } else if (res === -1) {
                right = mid - 1; // target is lower
            } else {
                left = mid + 1; // target is higher
            }
        }

        return -1; // should never reach here
    }
}
