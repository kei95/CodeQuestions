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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null;
  const res: ListNode = null;
  const sortedListNode = helper(null, res, l1, l2);
  return sortedListNode;
}

function helper(
  prevListNode: ListNode | null,
  iniNode: ListNode | null,
  LNode: ListNode | null,
  RNode: ListNode | null
) {
  if (!LNode && !RNode) {
    return iniNode;
  }
  if (LNode && RNode) {
    const isLShorter: boolean = LNode.val <= RNode.val;
    const currentNode: ListNode = new ListNode(
      isLShorter ? LNode.val : RNode.val,
      null
    );
    if (prevListNode) {
      prevListNode.next = currentNode;
    } else {
      prevListNode = currentNode;
      iniNode = prevListNode;
    }
    isLShorter ? (LNode = LNode.next) : (RNode = RNode.next);

    return helper(currentNode, iniNode, LNode, RNode);
  }

  const currentNode: ListNode = new ListNode(
    LNode ? LNode.val : RNode.val,
    null
  );
  if (prevListNode) {
    prevListNode.next = currentNode;
  } else {
    iniNode = currentNode;
    prevListNode = currentNode;
  }
  LNode ? (LNode = LNode.next) : (RNode = RNode.next);
  return helper(currentNode, iniNode, LNode, RNode);
}

// time: O(n)
// space: O(n)
