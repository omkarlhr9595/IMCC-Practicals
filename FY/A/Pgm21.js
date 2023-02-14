// Name: Omkar Lohar
// Roll No. : 2201112

// 21.Write a program to generate sequence of Fibonacci numbers using Dynamic 
// Programming.


const fibonacciSeries = (n, arr = {}) => {
  if (n in arr) return arr[n];
  if (n <= 2) return 1;
  arr[n] = fibonacciSeries(n - 1, arr) + fibonacciSeries(n - 2, arr);
  return arr[n];
};

console.log(fibonacciSeries(7));
