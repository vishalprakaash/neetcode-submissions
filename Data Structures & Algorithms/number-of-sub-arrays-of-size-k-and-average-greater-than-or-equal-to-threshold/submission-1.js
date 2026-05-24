class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let hits = 0;
        let windowSum = 0;

        // Initial window sum
        for (let i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        if (windowSum / k >= threshold) hits++;

        // Slide the window
        for (let i = k; i < arr.length; i++) {
            windowSum += arr[i] - arr[i - k]; // add new, remove old
            if (windowSum / k >= threshold) hits++;
        }

        return hits;
    };

}
