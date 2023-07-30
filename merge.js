function merge(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArr = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      mergedArr.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else {
      mergedArr.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  if (arr1Pointer >= arr1.length) {
    mergedArr.push(...arr2.slice(arr2Pointer));
  }
  if (arr2Pointer >= arr2.length) {
    mergedArr.push(...arr1.slice(arr1Pointer));
  }

  return mergedArr;
}

// console.log(merge([1, 3, 5, 6], [1, 1, 2, 3, 6, 8, 12, 15]));

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
