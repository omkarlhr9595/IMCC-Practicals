class QucikSort {
  swap(items, l, h) {
    let temp = items[l];
    items[l] = items[h];
    items[h] = temp;
  }
  partition(items, l, h) {
    let pivot = items[Math.floor((l + h) / 2)]; //middle element
    let i = l; //left pointer
    let j = h; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        this.swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }
  quickSort(items, l, h) {
    let index;
    if (items.length > 1) {
      index = this.partition(items, l, h);
      if (l < index - 1) {
        this.quickSort(items, l, index - 1);
      }
      if (index < h) {
        this.quickSort(items, index, h);
      }
    }
    return items;
  }
}

const qs = new QucikSort();
console.log(qs.quickSort([5, 2, 1, 3, 4], 0, 4));
