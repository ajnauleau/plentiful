const binarySearch = (array, num, start, end) => {
  if (start == end) {
    if (array[start] > num) {
      return start;
    } else {
      return start + 1;
    }
  }

  if (start > end) {
    return start;
  }

  let mid = Math.round((start + end) / 2);

  if (array[mid] < num) {
    return binarySearch(array, num, mid + 1, end);
  } else if (array[mid] > num) {
    return binarySearch(array, num, start, mid - 1);
  } else {
    return mid;
  }
};

console.log(binarySearch([1, 3, 7, 5, 6, 9, 1, 3, 4], 1, 8, 9));
