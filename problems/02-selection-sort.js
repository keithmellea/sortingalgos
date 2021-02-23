// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  let n = list.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i
    for (let j = i + 1; j < n; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(list, min, i);
    }
  }
  return list;
}

module.exports = {
  selectionSort,
  swap
};
