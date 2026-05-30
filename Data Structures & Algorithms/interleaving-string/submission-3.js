class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;
        let memo = new Map();
        
        const check = (p1, p2, p3) => {
            if (p3 === s3.length) return true;
            let key = `${p1},${p2}`;
            if (memo.has(key)) return memo.get(key);

            let res = false;
            if (p1 < s1.length && s3[p3] === s1[p1]) {
                res = check(p1 + 1, p2, p3 + 1);
            }
            if (!res && p2 < s2.length && s3[p3] === s2[p2]) {
                res = check(p1, p2 + 1, p3 + 1);
            }
            
            memo.set(key, res);
            return res;
        }
        
        return check(0, 0, 0);
    }
}