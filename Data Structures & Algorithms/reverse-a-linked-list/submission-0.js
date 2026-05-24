/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next; // save next node
    curr.next = prev;         // reverse pointer
    prev = curr;              // move prev forward
    curr = nextTemp;          // move curr forward
  }

  return prev; // new head of reversed list
    }
}
