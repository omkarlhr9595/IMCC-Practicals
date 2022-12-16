/**
 * Assi1
 */
class Assigment1 {

    int var1 = 100;
    int var2 = 200;

    public static void method1(Assigment1 a) {
        System.out.println(a.var1);
        System.out.println(a.var2);
    }

    public static void method2(Assigment1 a) {
        System.out.println(a.var1);
        System.out.println(a.var2);
    }

    public static void main(String[] args) {
       
        Assigment1 a = new Assigment1();

        Assigment1.method1(a);
        Assigment1.method2(a);

    }
}