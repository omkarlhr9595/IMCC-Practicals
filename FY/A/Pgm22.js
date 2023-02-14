// Name: Omkar Lohar
// Roll No. : 2201112

// 22.Write a program to count all possible unique paths from top left to bottom right of 
// a mXn matrix.

class UniquePath {
  uniquePath(m, n) {
    if (m == 1 || n == 1) {
      return 1;
    }
    return this.uniquePath(m, n - 1) + this.uniquePath(m - 1, n);
  }
}

const up = new UniquePath();
console.log(up.uniquePath(3, 3));
