// Implement Merge Sort

function merge(array1, array2) {
  let result = [];
debugger
  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      result.push(array2[0])
      array2.splice(0, 1)
      debugger
    } else {
      result.push(array1[0])
      array1.splice(0, 1);
    debugger
    }
  }

  while (array1.length) {
    result.push(array1[0]);
    array1.splice(0, 1);
  debugger
  }
  while (array2.length) {
    result.push(array2[0])
    array2.splice(0, 1)
  debugger
  }
  debugger
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
    debugger
  }
  var el1 = array.slice(0, Math.floor(array.length / 2));
  var el2 = array.slice(Math.floor((array.length / 2)));
  debugger

  let ele1 = mergeSort(el1)
  let ele2 = mergeSort(el2)
debugger
  return merge(ele1, ele2);


}

module.exports = {
  merge,
  mergeSort
};
