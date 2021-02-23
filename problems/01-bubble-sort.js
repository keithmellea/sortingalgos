// Implement Bubble Sort

function swap(array, idx1, idx2) {
  debugger
  let temp = array[idx1];
  debugger
  array[idx1] = array[idx2];
  debugger
  array[idx2] = temp;
  debugger
}

function bubbleSort(array) {
  let swapped = true;
  debugger
  while (swapped) {
    debugger
    swapped = false;
    debugger
    for (let i = 0; i < array.length - 1; i++) {

      if (array[i] > array[i + 1]) {
        debugger
        swap(array, i, i + 1);
        swapped = true;
        debugger
      }
    }
  }
  debugger
  return array;
}

// function bubbleSort(array) {
//   let n = array.length - 1;
//   let swapped = false;
//   for (let i = 0; i < n; i++) {
//     swapped = false;
//     debugger
//     if (array[i] > array[i + 1]) {
//       debugger
//       swap(array, i, i + 1);
//       debugger
//       // console.log(array);
//       swapped = true;
//     }
//     debugger
//     if (i === n && swapped === false) {
//       debugger
//       return array;

//     }
//     else if (i === n && swapped === true) {
//       debugger
//       i = 0;

//     }
//     debugger
//   }
// }

let ar = ['a', 'b', 'c']
console.log(swap(ar, 0, 2))
console.log(ar);
console.log(bubbleSort([1, 2, 5, 6, 2, 3, 8]));

module.exports = {
  bubbleSort,
  swap
};
