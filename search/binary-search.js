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

    let mid = round((start + end) / 2);

    if (array[mid] < num) {
        return binarySearch(array, num, mid + 1, end);
    } else if (array[mid] > num) {
        return binarySearch(array, item, start, mid - 1);
    } else {
        return mid;
    }
};

export default binarySearch;
