class FizzBuzz {
    void fizzBuzz() {
        for (int i = 1; i <= 50; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else {
                System.out.println(i);
            }
        }
    }
}

public class Assignment3 {
    public static void main(String[] args) {
        new FizzBuzz().fizzBuzz();
    }
}