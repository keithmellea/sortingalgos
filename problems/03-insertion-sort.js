// Implement Insertion Sort

function insertionSort(list) {
let sorted = 1;
let n = list.length;
let focus = undefined;

  while (sorted < n) {
    for (let i = 1; i < n; i++) {
      if (focus === undefined) {
        focus = i;
      }

      if (list[focus] < list[i]) {
        focus = i;
      }
    }
    for (let j = 0; j < sorted; j++) {
    
      if (list[focus] > list[j]) {
      list.splice(j + 1, 0, list[focus]);
      sorted++;
      }
    }
  }
return list;
}

module.exports = {
  insertionSort
};
