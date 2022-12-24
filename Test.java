public class Test {
    Test(){// 0 args constructor
        this("Omkar");
        System.out.println("0 args constructor called");
    }
    Test(int a){
        System.out.println(a);
    }
    Test(String s){
        this(10);
        System.out.println(s);
    }
    public static void main(String[] args) {
        Test obj = new Test();
    }
}
