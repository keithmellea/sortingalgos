// Implement Quick Sort

function quickSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  let pivot = array[0];
  array.splice(0, 1);
  let hi = [];
  let lo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lo.push(array[i]);
    }
    else if (array[i] >= pivot) {
      hi.push(array[i]);
    }
  }
  let hiSorted = quickSort(hi);
  let loSorted = quickSort(lo);

  return loSorted.concat([pivot]).concat(hiSorted);
}


module.exports = {
  quickSort
};
