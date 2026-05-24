class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
         const adj = new Map();
        for (let i = 0; i < numCourses; i++) {
            adj.set(i, []);
        }
        for (const [course, pre] of prerequisites) {
            adj.get(course).push(pre);
        }

        const visited = new Set(); // Globally visited
        const path = new Set();    // Nodes in current DFS path

        const dfs = (course) => {
            if (path.has(course)) return false; // Cycle detected
            if (visited.has(course)) return true; // Already processed

            path.add(course);
            for (const neighbor of adj.get(course)) {
                if (!dfs(neighbor)) return false;
            }
            
            path.delete(course); // Backtrack
            visited.add(course); // Mark as safe
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
