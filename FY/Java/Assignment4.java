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
