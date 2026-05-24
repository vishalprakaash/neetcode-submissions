class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const data = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        if(s.length % 2 != 0) return false;
       for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                 stack.push(char);
            } else {
                if (stack.length === 0 || stack[stack.length - 1] !== data[char]) { 
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
