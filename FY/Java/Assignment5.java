/*
 * 
 * Write a Java program as per following requirements:
 * abstract class DemoAbstract
 * {
 * abstract int method1(Char c , int a);
 * abstract float method2(boolean b);
 * abstract String Credential(String uname, String upwd);
 * }
 */
abstract class DemoAbstract {
    abstract int method1(char c, int a);

    abstract float method2(boolean b);

    abstract String Credential(String username, String userpassword);
}

abstract class demo {
    String Credential(String username, String userpassword) {
        System.out.println("this is method2 " + username + " " + userpassword);
        return username;
    }
}

class Assignment5 extends demo {
    int method1(char c, int a) {
        System.out.println("this is method1 " + c + " " + a);
        return c;
    }

    float method2(boolean b) {
        System.out.println("this is method2 " + b);
        return 1;

    }

    public static void main(String[] args) {
        Assignment5 obj = new Assignment5();
        obj.method1('a', 20);
        obj.method2(true);
        obj.Credential("mes", "imcc");
    }
}