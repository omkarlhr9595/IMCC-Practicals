class ArmstrongNumber {

    int degreeOfNum(int base, int power) {
        int ans = 1;
        for (int i = 1; i <= power; i++) {
            ans *= base;
        }

        return ans;
    }

    void isArmstrongNumber(int num) {

        int digits = (int) Math.log10(num) + 1;

        System.out.println(digits);

        int temp = num, arm = 0;
        int remainder;
        while (temp > 0) {
            remainder = temp % 10;

            arm += degreeOfNum(remainder, digits);
            temp /= 10;
        }

        if (arm == num) {
            System.out.println(num + " is a Armstrong number.");
        } else {
            System.out.println(num + " is not a Armstrong number.");
        }
    }

}

/**
 * Assignment1
 */
public class Assignment1 {

    public static void main(String[] args) {

        ArmstrongNumber armObj = new ArmstrongNumber();

        int num = 1741725;
        armObj.isArmstrongNumber(num);
    }

}