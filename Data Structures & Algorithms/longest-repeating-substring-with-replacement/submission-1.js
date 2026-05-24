class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    const count = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        // Track the most frequent character count in the window
        maxCount = Math.max(maxCount, count[char]);

        // If replacements needed exceed k, shrink window
        while ((right - left + 1) - maxCount > k) {
            count[s[left]]--;
            left++;
        }

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    }
}
