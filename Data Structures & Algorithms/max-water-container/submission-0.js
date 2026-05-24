class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let left = 0;                  // pointer at the start
    let right = height.length - 1; // pointer at the end
    let maxArea = 0;

    while (left < right) {
        // calculate width
        const width = right - left;
        // calculate height (limited by the shorter bar)
        const currentHeight = Math.min(height[left], height[right]);
        // calculate area
        const area = width * currentHeight;
        // update maxArea if needed
        maxArea = Math.max(maxArea, area);

        // move the pointer of the shorter bar inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
    }
}
