class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
       const store = [];
        let hits = 0;
        for(let i = 0; i < arr.length; i++) {
            store.push(arr[i]);
            if(store.length > k) {
                store.shift();
            }
            const sum = store.reduce((prev, current) => prev + current, 0);
            if(store.length === k && (sum / k) >= threshold) {
                hits++;
            }

        }
        return hits
    }
}
