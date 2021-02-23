// Implement Insertion Sort
debugger
function insertionSort(list) {
  debugger
  let sorted = 1;
  let n = list.length;
  let focus = undefined;
  debugger

  while (sorted < n) {
    for (let i = 1; i < n; i++) {
      if (focus === undefined) {
        focus = i;
        debugger
      }

      if (list[focus] < list[i]) {
        focus = i;
        debugger
      }
    }
    for (let j = 0; j < sorted; j++) {

      if (list[focus] > list[j]) {
        debugger
        list.splice(j + 1, 0, list[focus]);
        list.splice(focus, 1);
        sorted++;
        debugger
      }
    }
  }
  return list;
}

insertionSort([4, 5, 9, 3, 2, 6, 7])

module.exports = {
  insertionSort
};
