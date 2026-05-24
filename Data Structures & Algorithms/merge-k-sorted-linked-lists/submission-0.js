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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */


    mergeKLists(lists) {
        if (lists.length === 0) return null;

        let merged = lists[0];

        for (let i = 1; i < lists.length; i++) {
            const dummy = new ListNode(0);
            let current = dummy;
            let l1 = merged;
            let l2 = lists[i];

            while (l1 !== null && l2 !== null) {
                if (l1.val < l2.val) {
                    current.next = l1;
                    l1 = l1.next;
                } else {
                    current.next = l2;
                    l2 = l2.next;
                }
                current = current.next;
            }

            if (l1 !== null) current.next = l1;
            if (l2 !== null) current.next = l2;

            merged = dummy.next;
        }

        return merged;
    }
}
