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
 * @param {number[]} nums
 * @return {number|null}
 */
var majorityElement = function (nums) {
  // 1re passe : trouver le candidat (Boyer-Moore)
  let element = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      element = num;
    }
    count += num === element ? 1 : -1;
  }

  // 2e passe : vérifier que le candidat est bien majoritaire
  let occurrences = 0;
  for (const num of nums) {
    if (num === element) occurrences++;
  }

  return occurrences > nums.length / 2 ? element : null;
};
