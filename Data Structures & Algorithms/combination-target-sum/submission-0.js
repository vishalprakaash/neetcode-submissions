class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function pathSum(path) {
            return path.reduce((tot, num) => tot + num, 0);
        }

        function backtrack(start, path) {
            const pathTotal = pathSum(path)
            if(pathTotal === target) {
                result.push([...path])
                return
            }
            if(start >= nums.length || pathTotal > target) {
                return
            }

            path.push(nums[start]);
            backtrack(start, path)
            path.pop();

            backtrack(start+1, path)

        }

        backtrack(0,[])
        return result;
    }

    
}
