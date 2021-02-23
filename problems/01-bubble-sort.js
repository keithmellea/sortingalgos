// Implement Bubble Sort

function swap(array, idx1, idx2) {
  debugger
  let temp = array[idx1];  // 2
  debugger
  array[idx1] = array[idx2];
  debugger
  array[idx2] = temp;
  debugger
return array;
}

function bubbleSort(array) {
  let n = array.length - 1;
  let swapped = false;
  for (let i = 0; i < n; i++) {
    swapped = false;
    debugger
    if (array[i] > array[i + 1]) {
      debugger
      swap(array, i, i + 1);
      debugger
      // console.log(array);
      swapped = true;
    }
    debugger
    if (i === n && swapped === false) {
      debugger
      return array;

    }
    else if (i === n && swapped === true) {
      debugger
      i = 0;

    }
    debugger
  }
}
console.log(swap(['a','b','c'], 0, 2))
console.log('a' < 'b');
console.log(bubbleSort([1, 2, 5, 6, 2, 3, 8]));

module.exports = {
  bubbleSort,
  swap
};
