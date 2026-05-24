class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent/child indices
  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  // Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Push new element
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  // Pop smallest element
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }

  // Bubble up
  bubbleUp(i) {
    while (i > 0 && this.heap[i][0] < this.heap[this.parent(i)][0]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  // Bubble down
  bubbleDown(i) {
    let smallest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.bubbleDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const N = points.length;
    let res = 0;
    const visit = new Set();
    const minHeap = new MinHeap();

    function generateAdjacency(path) {
      const [x1, y1] = points[path];
      for (let j = 0; j < N; j++) {
        if (visit.has(j)) continue;
        const [x2, y2] = points[j];
        const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        minHeap.push([dist, j]); // push [weight, node]
      }
    }

    minHeap.push([0, 0]);

    while (visit.size < N && !minHeap.isEmpty()) {
      const [weight, path] = minHeap.pop();
      if (visit.has(path)) continue;
      res += weight;
      visit.add(path);
      generateAdjacency(path);
    }

    return res;

    }
}