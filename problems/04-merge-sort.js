// Implement Merge Sort

function merge(array1, array2) {
  let result = [];

  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      result.push(array2[0])
      array2.splice(0, 1)
    } else {
      result.push(array1[0])
      array1.splice(0, 1);
    }
  }

  while (array1.length) {
    result.push(array1[0]);
    array1.splice(0, 1);
  }
  while (array2.length) {
    result.push(array2[0])
    array2.splice(0, 1)
  }
  return result;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let el1 = array.slice(0, Math.floor(array.length / 2));
  let el2 = array.slice(Math.floor(array.length / 2));

  el1 = mergeSort(el1)
  el2 = mergeSort(el2)

  return merge(el1, el2);


}

module.exports = {
  merge,
  mergeSort
};
