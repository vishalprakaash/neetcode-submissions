class MaxHeapData {
  constructor() {
    this.heap = [];
  }

  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  peek() {
    return this.heap[0];
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    let largest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(i, largest);
      this.heapifyDown(largest);
    }
  }

  size() {
    return this.heap.length;
  }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeapData();
        stones.forEach(stone => maxHeap.push(stone));

        while (maxHeap.size() > 1) {
            const y = maxHeap.pop(); // heaviest
            const x = maxHeap.pop(); // second heaviest

            if (y !== x) {
            maxHeap.push(y - x);
            }
        }

        return maxHeap.size() === 1 ? maxHeap.pop() : 0;
    }
}
