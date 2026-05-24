class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.count = n;
    }
    find(i) {
        if (this.parent[i] === i) return i;
        return this.parent[i] = this.find(this.parent[i]);
    }
    union(i, j) {
        let rootI = this.find(i), rootJ = this.find(j);
        if (rootI !== rootJ) {
            this.parent[rootI] = rootJ;
            this.count--;
            return true;
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        const originalEdges = edges.map((e, i) => [...e, i]); // n
        const sortedEdges = [...originalEdges].sort((a, b) => a[2] - b[2]); // n logn

        const getMSTWeight = (skipIdx, forceIdx) => {
            let uf = new UnionFind(n);
            let weight = 0;
            if (forceIdx !== -1) {
                const [u, v, w] = originalEdges[forceIdx];
                uf.union(u, v);
                weight += w;
            }
            for (let [u, v, w, idx] of sortedEdges) {
                if (idx !== skipIdx && uf.union(u, v)) {
                    weight += w;
                }
            }
            return uf.count === 1 ? weight : Infinity;
        };

        const baseMSTWeight = getMSTWeight(-1, -1);
        const critical = [];
        const pseudo = [];

        for (let i = 0; i < edges.length; i++) {
            if (getMSTWeight(i, -1) > baseMSTWeight) {
                critical.push(i);
            } else if (getMSTWeight(-1, i) === baseMSTWeight) {
                pseudo.push(i);
            }
        }

        return [critical, pseudo];
    }
}