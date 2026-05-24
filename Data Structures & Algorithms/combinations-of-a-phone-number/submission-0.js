class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
      const result = [];
      if (!digits.length) return result;
      
      const phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
      };

      function backtrack(index, path) {
        if (index === digits.length) {
          result.push(path);
          return;
        }
        
        for (const char of phoneMap[digits[index]]) {
          backtrack(index + 1, path + char);
        }
      }
      
      backtrack(0, "");
      return result;
        
    }
}
