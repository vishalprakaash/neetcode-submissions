class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        let memo = new Map();
        function dfs(idx) {
            if(idx >= days.length) return 0;
            if(memo.has(idx)) return memo.get(idx);

            let monthIdx = idx;
            let weekIdx = idx;
            let dayIdx = idx + 1;

            while (monthIdx < days.length && days[monthIdx] < days[idx] + 30) {
                monthIdx++;
            }
            while (weekIdx < days.length && days[weekIdx] < days[idx] + 7) {
                weekIdx++;
            }

            let res = Math.min(
                costs[0] + dfs(dayIdx),
                costs[1] + dfs(weekIdx),
                costs[2] + dfs(monthIdx)
            );
            
            memo.set(idx, res);
            return res;
        }
        return dfs(0);
    }
}