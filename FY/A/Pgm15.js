class RecursiveStaircae {
  climbStiars(n) {
    if (n < 2) {
      return 1;
    } else return this.climbStiars(n - 1) + this.climbStiars(n - 2);
  }
}

const RSC = new RecursiveStaircae();

console.log(RSC.climbStiars(6));
