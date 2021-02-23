// Implement Bubble Sort

function swap(array, idx1, idx2) {
  debugger
  let temp = array[idx1];  // 2
  array[idx1] = array[idx2];
  array[idx2] = temp;
  debugger
  // console.log(array);
  return array;
}

function bubbleSort(array) {
  let n = array.length - 1;
  let swapped = false;
  for (let i = 1; i <= n; i++) {
   debugger
    if (array[i - 1] > array[i]) {
      debugger
      swap(array, i - 1, i);
      debugger
      // console.log(array);
      swapped = true;
    }
    debugger
    if (i === n && swapped === false) {
      debugger
      return array;
    
    }
    else if (swapped === true) {
     debugger
      i = 0;
      
    }
    debugger
  }
}

console.log(bubbleSort([1, 2, 5, 6, 2, 3, 8]));

module.exports = {
  bubbleSort,
  swap
};
