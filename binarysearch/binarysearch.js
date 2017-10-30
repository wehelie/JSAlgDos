/*
 * Recursive Binary Search
 *
 * @param {array} arr see if element in Array
 * @param {Number} key element to be found in index of array
 * @param {Number} start left index
 * @param {Number} end right index
 * 
 */

// left index of array
var start = 0;

// right index of array
var end = arr.length - 1;

function binarySearch(arr, key, start, end) {
  // nothing found
  if (start > end) {
    return -1;
  }

  // half the array
  var mid = Math.floor((start + end) / 2);

  // if the key is located in the middle
  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    return binarySearch(arr, key, start, mid - 1);
  } else {
    return binarySearch(arr, key, mid + 1, end);
  }
}
