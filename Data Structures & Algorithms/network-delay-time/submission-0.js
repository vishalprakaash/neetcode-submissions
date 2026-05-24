class Heap {
  constructor() {
    this.heap = [];
  }

  size() { return this.heap.length; }
  peek() { return this.heap[0]; }

  push([src, weight]) {
    this.heap.push([src, weight]);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  heapifyUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][1] < this.heap[parentIndex][1]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else break;
    }
  }

  heapifyDown(index) {
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let target = index;

      if (left < this.size() && this.heap[left][1] < this.heap[target][1]) {
        target = left;
      }
      if (right < this.size() && this.heap[right][1] < this.heap[target][1]) {
        target = right;
      }

      if (target !== index) {
        [this.heap[index], this.heap[target]] = [this.heap[target], this.heap[index]];
        index = target;
      } else break;
    }
  }
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
      const adjacentNodes = {};
      times.map(([source, target, time]) => {
        if(adjacentNodes[source]) {
          adjacentNodes[source].push([target, time])
        } else {
          adjacentNodes[source] = [[target, time]]
        }
      })

      const shortest = new Map();
      const minHeap = new Heap();
      minHeap.push([k, 0]);

      while(minHeap.size() > 0) {
        const [node, dist] = minHeap.pop();
        if (shortest.has(node)) continue;
        shortest.set(node, dist);
        
        const neighbors = adjacentNodes[node] || [];
        for (const [v, w] of neighbors) {
          if (!shortest.has(v)) {
            minHeap.push([v, dist + w]);
          }
        }
      }

      if (shortest.size !== n) return -1;
      return Math.max(...shortest.values());
    }
}