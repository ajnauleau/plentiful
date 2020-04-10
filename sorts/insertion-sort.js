/* Insertion sort is used by the heap sort
   if the array size is small or if the size
  of the "run" is small */

const binarySearch = require('../search/');

const insertionSort = (array) => {
  let length = len(array);
  for(let i=1; i<=length; i++) {
    let value = array[i];
    let psitn = binarySearch(array, value, 0, i - 1);
    // Fix array manipulation (port from Python)
    array = array[:pos] + [value] + array[pos:index] + array[index+1:];
  }
  return array
};

module.exports = insertionSort;
