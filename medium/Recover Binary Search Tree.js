// // /*
// Problem:

// You are given the root of a Binary Search Tree (BST), where the values
// of exactly two nodes of the tree were swapped by mistake.

// Recover the tree without changing its structure.
// */

// ============================================================
// Example 1
// ============================================================

/*
Before:

      1
     /
    3
     \
      2


After:

      3
     /
    1
     \
      2


Input:
root = [1,3,null,null,2]

Output:
[3,1,null,null,2]

Explanation:
3 cannot be a left child of 1 because 3 > 1.
Swapping 1 and 3 makes the BST valid.
*/

// ============================================================
// Example 2
// ============================================================

/*
Before:

      3
     / \
    1   4
       /
      2


After:

      2
     / \
    1   4
       /
      3


Input:
root = [3,1,4,null,null,2]

Output:
[2,1,4,null,null,3]

Explanation:
2 cannot be in the right subtree of 3 because 2 < 3.
Swapping 2 and 3 makes the BST valid.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let first = null;
  let second = null;
  let prev = null;

  function inorder(node) {
    if (node === null) return;

    // Left
    inorder(node.left);

    // Detect an invalid order
    if (prev !== null && prev.val > node.val) {
      if (first === null) {
        first = prev;
      }
      second = node;
    }

    // Update prev
    prev = node;

    // Right
    inorder(node.right);
  }

  // Inorder traversal
  inorder(root);

  // Swap the two values
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};
