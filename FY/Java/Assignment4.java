/*
 * 
 * Write a Java program as per following requirements:
 * 1. Create one Outer class and one Inner class
 * 2. Declare two instance variables and one method in each class
 * 3. Access outer class members through inner class object 
 * 
 */
class Outer{
    int a=10;
    int b=20;
    void m1(){
        System.out.println("Outer Method");
    }
    class Inner{
        int a=100;
        int b=200;
        void m1(Inner i){
            
            System.out.println("Inner Method");
        }
    }

    public static void main(String[] args) {
        Outer o = new Outer();

        Outer.Inner i = o.new Inner();
        
        i.m1(i);
        
    }
}
