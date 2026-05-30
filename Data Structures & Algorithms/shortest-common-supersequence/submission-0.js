class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
         const memo = new Map();

        const dfs = (i, j) => {
            const key = `${i},${j}`;
            if (memo.has(key)) return memo.get(key);

            // Base cases
            if (i === 0) return str2.slice(0, j);
            if (j === 0) return str1.slice(0, i);

            let result;

            // If last characters match, use it once
            if (str1[i - 1] === str2[j - 1]) {
                result = dfs(i - 1, j - 1) + str1[i - 1];
            } else {
                // Try both possibilities and take the shorter one
                const takeStr1 = dfs(i - 1, j) + str1[i - 1];
                const takeStr2 = dfs(i, j - 1) + str2[j - 1];

                if (takeStr1.length <= takeStr2.length) {
                    result = takeStr1;
                } else {
                    result = takeStr2;
                }
            }

            memo.set(key, result);
            return result;
        };

        return dfs(str1.length, str2.length);
    }
}
