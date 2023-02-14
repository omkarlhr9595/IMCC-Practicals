// Name: Omkar Lohar
// Roll No. : 2201112

//20.Write a program to implement Tower of Hanoi problem.

function towerOfHanoi(n, source, auxiliary, target) {
  if (n === 1) {
    console.log(`Move disk 1 from source ${source} to target ${target}`);
    return;
  }

  towerOfHanoi(n - 1, source, target, auxiliary);
  console.log(`Move disk ${n} from source ${source} to target ${target}`);
  towerOfHanoi(n - 1, auxiliary, source, target);
}

const n = 4;
towerOfHanoi(n, "A", "B", "C");
