class Jump_Game {
  min_jumps(nums) {
    if (nums.length == 1) {
      return 0;
    }
    let count = 0;
    let i = 0;
    while (i + nums[i] < nums.length - 1) {
      let maxVal = 0;
      let maxValIndex = 0;
      for (let j = 1; j <= nums[i]; j++) {
        if (nums[j + i] + j > maxVal) {
          maxVal = nums[j + i] + j;
          maxValIndex = i + j;
        }
      }
      i = maxValIndex;
      count++;
    }
    return count + 1;
  }
}

const jg = new Jump_Game();

console.log(
  "Minimum number of jumps to reach end is " +
    jg.min_jumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1])
);
