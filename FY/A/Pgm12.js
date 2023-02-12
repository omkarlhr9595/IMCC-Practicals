class LinearSearch {
  search = (arr, key) => {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === key) {
        console.log("Element found at " + index);
        break;
      }
    }
  };
}

const ls = new LinearSearch();
ls.search([1, 2, 3, 4, 5], 2);
