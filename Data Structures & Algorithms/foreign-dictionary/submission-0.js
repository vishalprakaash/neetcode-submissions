class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adjacents = new Map();
        let indegree = new Map();
        let queue = []
        let result = []

        for (let word of words) {
            for (let char of word) {
                if (!adjacents.has(char)) {
                    adjacents.set(char, new Set());
                    indegree.set(char, 0);
                }
            }
        }

        for(let i = 0; i< words.length -1; i++) {
            let left = words[i];
            let right = words[i+1];
            let smallest = Math.min(left.length, right.length);
            let found = false;
            for (let j = 0; j < smallest; j++) {
                if(left[j] !== right[j]) {
                    if (!adjacents.get(left[j]).has(right[j])) {
                        adjacents.get(left[j]).add(right[j]);
                        indegree.set(right[j], indegree.get(right[j]) + 1);
                    }
                    found = true;
                    break;
                }
            }
            if (!found && left.length > right.length) return "";
        }

        for (let [key, val] of indegree) {
            if(val === 0) {
                queue.push(key)
            }
        }

        while(queue.length > 0) {
            let curr = queue.shift();
            result.push(curr);
            for(let neighbor of adjacents.get(curr)) {
            console.log(`${curr} is ${result} => neighbor: ${neighbor} `)
                indegree.set(neighbor, indegree.get(neighbor) - 1);
                if(indegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
        
        return result.length === indegree.size ? result.join("") : "";
    }
}