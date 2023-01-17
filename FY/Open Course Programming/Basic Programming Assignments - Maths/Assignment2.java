import java.util.ArrayList;

class PrimeNumber {

    ArrayList<Integer> getPrimeNumber(int num) {

        ArrayList<Integer> primeNumbers = new ArrayList<Integer>();

        int[] temp = new int[num + 1];

        for (int i = 2; i <= Math.sqrt(num); i++) {
            for (int j = i; j <= num; j = j + i) {

                temp[j] = 1;

            }
        }

        temp[2] = temp[3] = 0;

        for (int i = 2; i < temp.length; i++) {
            if (temp[i] == 0) {
                primeNumbers.add(i);
            }
        }

        return primeNumbers;

    }

}

public class Assignment2 {

    public static void main(String[] args) {

        PrimeNumber pnObj = new PrimeNumber();

        ArrayList<Integer> primesnumber = pnObj.getPrimeNumber(15);

        for (Integer numbers : primesnumber) {
            System.out.println(numbers);
        }

    }

}
