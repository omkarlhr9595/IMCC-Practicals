class PrimeNumber {

    void printPrimeNumbers(int n) {

        int num1 = 1, num2 = 1, i = 1, sum = 0;

        while (i <= n) {
            if (i == 1 || i == 2) {
                System.out.println(1);

            } else {
                sum = num1 + num2;
                System.out.println(sum);
                num1 = num2;
                num2 = sum;

            }
            i++;
        }

    }

}

/**
 * Assignment4
 */
public class Assignment4 {

    public static void main(String[] args) {
        PrimeNumber pmObj = new PrimeNumber();
        pmObj.printPrimeNumbers(6);
    }

}