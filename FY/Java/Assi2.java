public class Assi2 {

    int var1 = 100;
    int var2 = 200;
    static int svar1 = 300;
    static int svar2 = 400;

    public void method1() {
        System.out.println(var1);
        System.out.println(var2);
        System.out.println(svar1);
        System.out.println(svar2);
    }

    public static void method2() {

        Assi2 obj = new Assi2();

        System.out.println(obj.var1);
        System.out.println(obj.var2);
        System.out.println(svar1);
        System.out.println(svar2);
    }

    public static void main(String[] args) {
        Assi2 obj = new Assi2();
        obj.method1();
        Assi2.method2();
    }
}