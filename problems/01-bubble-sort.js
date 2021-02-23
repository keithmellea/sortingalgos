// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];  // 2
  array[idx1] = array[idx2];
  array[idx2] = temp;
  // console.log(array);
  return array;
}

function bubbleSort(array) {
  let n = array.length - 1;
  let swapped = false;
  for (let i = 1; i <= n; i++) {
    if (array[i - 1] > array[i]) {
      swap(array, i - 1, i);
      // console.log(array);

      swapped = true;
    }
    if (i = n && swapped === false) {
      return array;
    }
    else if (i === n && swapped === true) {
      i = 0;
    }
  }
}

console.log(bubbleSort([1, 2, 5, 6, 2, 3, 8]));

module.exports = {
  bubbleSort,
  swap
};
