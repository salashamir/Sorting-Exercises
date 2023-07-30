function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    let sorted = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    if (sorted) break;
  }

  return arr;
}

module.exports = bubbleSort;
