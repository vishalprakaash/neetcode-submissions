class MyStack {
    q1 = [];
    q2 = [];

    // Push element x onto stack
    push(x) {
        // Always push into q2 first
        this.q2.push(x);

        // Move all elements from q1 to q2
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift());
        }

        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    // Removes the element on top of the stack and returns it
    pop() {
        return this.q1.shift();
    }

    // Get the top element
    top() {
        return this.q1[0];
    }

    // Returns whether the stack is empty
    empty() {
        return this.q1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
