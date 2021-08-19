// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  const valList = new Set([]);
  return helper(valList, head);
}

function helper(valList, node: ListNode): boolean {
  if (valList.has(node)) {
    return true;
  } else if (!node.next) {
    return false;
  }
  valList.add(node);
  return helper(valList, node.next);
}

// time O(n)
// Space O(n)
