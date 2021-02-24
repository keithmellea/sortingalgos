// Implement Insertion Sort
debugger
function insertionSort(list) {



  for (let i = 1; i < list.length; i++) {
    let currElement = list[i];
    for (var j = i - 1; j >= 0 && currElement < list[j]; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = currElement;
  }
  return list;
}





// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currElement = arr[i];
//     for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currElement;
//   }
//   return arr;
// }
insertionSort([4, 5, 9, 3, 2, 6, 7])

module.exports = {
  insertionSort
};
