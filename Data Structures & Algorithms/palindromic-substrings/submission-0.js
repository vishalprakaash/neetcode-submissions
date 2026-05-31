class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        function checkPalindrome(left,right) {
             while(left >=0 && right < s.length && s[left] === s[right]) {
                res++;
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
