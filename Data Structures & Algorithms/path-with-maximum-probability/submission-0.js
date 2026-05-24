class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
      const adj = Array.from({length: n}, () => []);
      for (let i = 0; i < edges.length; ++i) {
        const [u, v] = edges[i];
        const p = succProb[i];
        adj[u].push([v, p]);
        adj[v].push([u, p]);
      }
      if (start_node === end_node) return 1;
      const best = Array(n).fill(0);
      best[start_node] = 1;
      // max-heap of [node, prob]
      class MaxHeap {
        constructor(){ this.h = []; }
        size(){ return this.h.length; }
        push(x){ this.h.push(x); this._up(this.h.length-1); }
        pop(){ if(!this.h.length) return null; if(this.h.length===1) return this.h.pop();
          const top = this.h[0]; this.h[0]=this.h.pop(); this._down(0); return top; }
        _up(i){ while(i>0){ const p=Math.floor((i-1)/2); if(this.h[i][1]>this.h[p][1]){ [this.h[i],this.h[p]]=[this.h[p],this.h[i]]; i=p; } else break; } }
        _down(i){ const n=this.h.length; while(true){ let l=2*i+1,r=2*i+2, best=i; if(l<n && this.h[l][1]>this.h[best][1]) best=l; if(r<n && this.h[r][1]>this.h[best][1]) best=r; if(best!==i){ [this.h[i],this.h[best]]=[this.h[best],this.h[i]]; i=best; } else break; } }
      }
      const heap = new MaxHeap();
      heap.push([start_node, 1]);
      while (heap.size()) {
        const [node, prob] = heap.pop();
        console.log(`inside while node: ${node} prob:${prob} best[node]: ${best[node]}`)
        if (prob < best[node]) continue;
        if (node === end_node) return prob;
        for (const [nei, pEdge] of adj[node]) {
          const np = prob * pEdge;
          if (np > best[nei]) { 
            best[nei] = np; 
            heap.push([nei, np]);
          }
        }
      }
      return 0;
    }
}