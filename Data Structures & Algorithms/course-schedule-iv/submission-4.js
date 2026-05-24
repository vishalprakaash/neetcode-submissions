class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
         // Step 1: Build graph and indegree array
        const graph = new Map();
        const result = []
        
        for (let [pre, course] of prerequisites) {
            if (!graph.has(pre)) graph.set(pre, []);
            graph.get(pre).push(course);
        }

        function dfs(pre, course, path) {
            if(!graph.has(pre)) return false;
            if(path[pre]) return false
            path[pre] = true
            const neighbour = graph.get(pre);

            if(neighbour.includes(course)) return true;
            const results = []
            for (let newPre of neighbour) {
                results.push(dfs(newPre, course, path))
            }
            return results.includes(true)
        }

        for (let [pre, course] of queries) {
            const path = new Array(numCourses).fill(false);
            result.push(dfs(pre, course, path));
        }

        return result
    }
}