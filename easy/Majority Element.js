// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
/**
/**
 * @param {number[]} nums
 * @return {number|null}
 */
var majorityElement = function (nums) {
  // First pass: find the candidate using Boyer-Moore
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Second pass: verify that the candidate is actually a majority element
  let occurrences = 0;
  for (const num of nums) {
    if (num === candidate) occurrences++;
  }

  return occurrences > nums.length / 2 ? candidate : null;
};
