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
       if(head === null || head.next === null) {
        return head;
       }
       let res = this.reverseList(head.next)
        head.next.next = head;
        head.next = null;
       return res;
    }
}
