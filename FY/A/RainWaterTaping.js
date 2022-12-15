class RainWaterTaping {
  water = (arr) => {
    let left = new Array();
    let right = new Array();

    let max = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > max) {
        max = arr[index];
      }
      left[index] = max;
    }
    max = 0;
    for (let index = arr.length - 1; index >= 0; index--) {
      if (arr[index] > max) {
        max = arr[index];
      }
      right[index] = max;
    }

    let res = 0;
    for (let index = 0; index < arr.length; index++) {
      res += Math.min(left[index], right[index]) - arr[index];
    }
    return res;
  };
}

const a = new RainWaterTaping();
const arr = [3, 0, 2, 0, 4];
console.log(a.water(arr));
