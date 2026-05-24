class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(h) {
       let left = 0;
        let right = h.length - 1;
        let maxR = 0;
        let maxL = 0;
        let maxArea = 0;

        if (h.length < 3) return maxArea;

        while (left < right) {
            if (maxL - h[left] > 0) {
                maxArea += maxL - h[left]
            }
            if(maxR - h[right] > 0) {
                maxArea += maxR - h[right]
            }
            maxL = Math.max(maxL, h[left]);
            maxR = Math.max(maxR, h[right]);
            if(h[left] > h[right]) {
                right--;
            } else {
                left++;
            }
        }

        return maxArea;
    }
}
