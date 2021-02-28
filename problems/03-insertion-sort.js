// Implement Insertion Sort
debugger
// function insertionSort(list) {



//   for (let i = 1; i < list.length; i++) {
//     let currElement = list[i];
//     for (var j = i - 1; j >= 0 && currElement < list[j]; j--) {
//       list[j + 1] = list[j];
//     }
//     list[j + 1] = currElement;
//   }
//   return list;
// }

function insertionSort(list) {
  let sorted = 0
  let min = 1
  while (sorted < list.length) {
    if (list[min] < list[min - 1]) {
      let old = [min - 1]
      [list[min], list[old]] = [list[old], list[min]]
      min--
      continue;
    }
    if (min - 1 <= 0) {
      min = sorted + 1;
    } else if (min - 1 === sorted) {
      if (list[min] > list[min - 1]) {
        sorted++
        min = sorted + 1;
      }
    }
  }
  return list;
}
//   let sortedIdx = 0
//   let currIdx = 1


//   while (sortedIdx < list.length) {
//     if (list[currIdx] > list[currIdx - 1]) {
//       sortedIdx++;
//       currIdx = sortedIdx + 1;
//     } else {
//       const newSorted = [list[currIdx - 1]]
//       if (currIdx - 1 > 0) {
//         [list[currIdx - 1]] = [list[currIdx]]
//         [list[currIdx]] = newSorted;
//         currIdx--;
//       } else {
//         [list[currIdx - 1]] = [list[currIdx]]
//         [list[currIdx]] = newSorted;
//         sortedIdx++;
//         currIdx = sortedIdx + 1;
//       }
//     }
//   }
// }
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
console.log(insertionSort([4, 5, 9, 3, 2, 6, 7]))

module.exports = {
  insertionSort
};
