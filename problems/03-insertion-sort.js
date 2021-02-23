// Implement Insertion Sort
debugger
function insertionSort(list) {
  // debugger
  // let sorted = 1;
  // let n = list.length;
  // let focus = undefined;
  // debugger
  // let bool = false;
  // while (sorted < n) {
  //   bool = false;
  //   for (let i = 1; i < n; i++) {
  //     if (focus === undefined) {
  //       focus = i;
  //       debugger
  //     }

  //     if (list[focus] < list[i]) {
  //       focus = i;
  //       debugger
  //     }
  //   }
  //   for (var j = 0; j < sorted; j++) {

  //     if (list[focus] > list[j]) {
  //       debugger
  //       list.splice(j + 1, 0, list[focus]);
  //       list.splice(focus, 1);
  //       bool = true;
  //       debugger
  //     }
  //   }

  //   sorted++;
  // }
  // return list;



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
