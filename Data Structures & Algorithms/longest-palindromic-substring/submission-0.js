class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";
        function checkPalindrome(left,right) {
             while(left >=0 && right < s.length && s[left] === s[right]) {
                if(right - left + 1 > res.length) {
                    res = s.substring(left, right + 1);
                }
                right++;
                left--;
            }
        }
        for(let i = 0; i< s.length; i++) {
           checkPalindrome(i,i) // odd
           checkPalindrome(i,i+1) //even
        }
        return res;
    }
}
