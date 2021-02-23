// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let n = array.length - 1;
  let swapped = false;
  for (let i = 0; i < n; i++) {
    if (array[i] < array[i + 1]) {
    let swappedFunc = swap(array, array[i], array[i + 1]);
    let array = swappedFunc;
    swapped = true;     
    }
    if (i = array.length - 1 && swapped === false) {
      return array;
    }
    else if (i === array.length - 1 && swapped === true) {
      i = 0;
    }
  }
}

module.exports = {
  bubbleSort,
  swap
};
