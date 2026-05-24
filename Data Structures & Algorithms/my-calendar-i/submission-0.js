class SegmentTreeNode {
  constructor(start, end) {
    this.start = start;   // beginning of the interval
    this.end = end;       // end of the interval
    this.left = null;     // left child (covers first half)
    this.right = null;    // right child (covers second half)
    this.booked = false;  // whether this entire interval is fully booked
  }
}

class MyCalendar {
  constructor() {
    this.root = new SegmentTreeNode(0, 1e9); // cover a huge range of time
    console.log("Initialized calendar with root range [0, 1e9]");
  }

  book(start, end) {
    console.log(`\nTrying to book interval [${start}, ${end})`);
    if (this.query(this.root, start, end - 1)) {
      console.log(`Booking [${start}, ${end}) FAILED: overlap detected`);
      return false;
    }
    this.update(this.root, start, end - 1);
    console.log(`Booking [${start}, ${end}) SUCCESS`);
    return true;
  }

  // Check if any part of [start, end] is already booked
  query(node, start, end) {
    if (!node || start > node.end || end < node.start) {
      console.log(`Query [${start}, ${end}] skipped: outside node range [${node?.start}, ${node?.end}]`);
      return false;
    }
    if (node.booked) {
      console.log(`Query [${start}, ${end}] found overlap in node [${node.start}, ${node.end}]`);
      return true;
    }
    if (!node.left && !node.right) {
      console.log(`Query [${start}, ${end}] reached leaf [${node.start}, ${node.end}] with no booking`);
      return false;
    }

    const mid = Math.floor((node.start + node.end) / 2);
    if (!node.left) {
      node.left = new SegmentTreeNode(node.start, mid);
      console.log(`Created left child [${node.start}, ${mid}]`);
    }
    if (!node.right) {
      node.right = new SegmentTreeNode(mid + 1, node.end);
      console.log(`Created right child [${mid + 1}, ${node.end}]`);
    }

    return this.query(node.left, start, end) || this.query(node.right, start, end);
  }

  // Mark [start, end] as booked
  update(node, start, end) {
    if (!node || start > node.end || end < node.start) {
      console.log(`Update [${start}, ${end}] skipped: outside node range [${node?.start}, ${node?.end}]`);
      return;
    }
    console.log(`Nodes values for update [${start}, ${end}] within node [${node.start}, ${node.end}]`);

    if (start <= node.start && node.end <= end) {
      node.booked = true;
      node.left = null;
      node.right = null;
      console.log(`Update [${start}, ${end}] marked node [${node.start}, ${node.end}] as booked`);
      return;
    }

    const mid = Math.floor((node.start + node.end) / 2);
    if (!node.left) {
      node.left = new SegmentTreeNode(node.start, mid);
      console.log(`Created left child [${node.start}, ${mid}] during update`);
    }
    if (!node.right) {
      node.right = new SegmentTreeNode(mid + 1, node.end);
      console.log(`Created right child [${mid + 1}, ${node.end}] during update`);
    }

    this.update(node.left, start, end);
    this.update(node.right, start, end);

    node.booked = node.left.booked && node.right.booked;
    if (node.booked) {
      console.log(`Node [${node.start}, ${node.end}] fully booked after update`);
    }
  }
}