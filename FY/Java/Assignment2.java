/**
 * Assi2
 */
class Assignment2 {

    int var1 = 100;
    int var2 = 200;
    static int svar1 = 300;
    static int svar2 = 400;

    public void method1() {
        System.out.println(var1);
        System.out.println(var2);
        System.out.println(Assignment2.svar1);
        System.out.println(Assignment2.svar2);
    }

    public static void method2(Assignment2 obj) {
        System.out.println(obj.var1);
        System.out.println(obj.var2);
        System.out.println(Assignment2.svar1);
        System.out.println(Assignment2.svar2);
    }

    public static void main(String[] args) {
        Assignment2 obj = new Assignment2();
        obj.method1();
        Assignment2.method2(obj);
    }
}