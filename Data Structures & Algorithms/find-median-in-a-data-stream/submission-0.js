class Heap {
  constructor(compare) {
    this.heap = [];
    // compare function: (a, b) => a - b for MinHeap, (a, b) => b - a for MaxHeap
    this.compare = compare;
  }

  size() { return this.heap.length; }
  peek() { return this.heap[0]; }

  push(val) {
    this.heap.push(val);
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
      if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
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

      if (left < this.size() && this.compare(this.heap[left], this.heap[target]) < 0) {
        target = left;
      }
      if (right < this.size() && this.compare(this.heap[right], this.heap[target]) < 0) {
        target = right;
      }

      if (target !== index) {
        [this.heap[index], this.heap[target]] = [this.heap[target], this.heap[index]];
        index = target;
      } else break;
    }
  }
}

class MedianFinder {
  constructor() {
    // MaxHeap for the lower half
    this.small = new Heap((a, b) => b - a);
    // MinHeap for the upper half
    this.large = new Heap((a, b) => a - b);
  }

  addNum(num) {
    this.small.push(num);
    this.large.push(this.small.pop());

    // Maintain balance: small can have at most 1 more element than large
    if (this.small.size() < this.large.size()) {
      this.small.push(this.large.pop());
    }
  }

  findMedian() {
    if (this.small.size() === 0) return 0;
    
    if (this.small.size() > this.large.size()) {
      return this.small.peek();
    }
    return (this.small.peek() + this.large.peek()) / 2;
  }
}

