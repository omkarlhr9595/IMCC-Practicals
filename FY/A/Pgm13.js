class BinarySearch {
  binarySearch(arr, l, r, x) {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid] == x) {
        return mid;
      }
      if (arr[mid] > x) {
        return this.binarySearch(arr, l, mid - 1, x);
      }
      return this.binarySearch(arr, mid + 1, r, x);
    }
    return -1;
  }
}
const bs = new BinarySearch();
console.log(bs.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 3));
