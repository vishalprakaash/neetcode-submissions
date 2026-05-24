class MinHeap {
  constructor() {
    this.heap = [];
  }

  // helper functions
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
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    let smallest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  size() {
    return this.heap.length;
  }
}

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap();
    nums.forEach(num => this.add(num));
  }

  add(val) {
    this.minHeap.push(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.pop();
    }
    return this.minHeap.peek();
  }
}