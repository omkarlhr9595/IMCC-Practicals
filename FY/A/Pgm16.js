// Name: Omkar Lohar
// Roll No. : 2201112

//16.Write a program to find Maximum subarray in a given array.
class MaximumSumSubArray {
  maxSumSubArray(a, n) {
    let max_sum = 0;
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
        sum = sum + a[j];
        if (sum > max_sum) {
          max_sum = sum;
        }
      }
    }
    return max_sum;
  }
}
const MSSA = new MaximumSumSubArray();
console.log(MSSA.maxSumSubArray([-5, 8, 9, -6, 10, -15, 3], 7));
