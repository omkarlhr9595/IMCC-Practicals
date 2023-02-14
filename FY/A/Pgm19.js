// Name: Omkar Lohar
// Roll No. : 2201112

//19.Write a program to implement Merge Sort.

class MergeSort {
  mergeSort(arr) {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
  merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      i++;
    }

    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  }
}

const arr = [5, 1, 2, 4, 3];

const ms = new MergeSort();
let result = ms.mergeSort(arr);

console.log(result);
