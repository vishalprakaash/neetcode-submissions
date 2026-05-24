class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
         const projects = profits.map((p, i) => [capital[i], p]);

        // MinHeap by capital
        projects.sort((a, b) => a[0] - b[0]);

        const maxHeap = [];
        let i = 0;

        for (let j = 0; j < k; j++) {
            // Add all affordable projects to maxHeap
            while (i < projects.length && projects[i][0] <= w) {
            maxHeap.push(projects[i][1]);
            maxHeap.sort((a, b) => b - a); // keep max at front
            i++;
            }

            if (maxHeap.length === 0) break;

            // Pick most profitable
            w += maxHeap.shift();
        }

        return w;
    }
}
