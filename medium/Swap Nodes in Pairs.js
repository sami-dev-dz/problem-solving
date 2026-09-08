// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values
//  in the list's nodes (i.e., only nodes themselves may be changed.)

// Example:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let first = head;
  let second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
};
