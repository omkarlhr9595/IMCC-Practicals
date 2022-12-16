/**
 * Assignment3
 * 
 * 1. Create Default Constructor
 * 2. Create Parameterized Constructor
 * 3. Call one constructor from another constructor
 */

class Assignment3 {
    int rno;
    String name;

    Assignment3() {
        this(112, "Omkar");
    }

    Assignment3(int rno, String name) {
        this.rno = rno;
        this.name = name;
    }

    void display() {
        System.out.println("Roll No:" + rno + " Name:" + name);
    }

    public static void main(String[] args) {
        Assignment3 obj = new Assignment3();
        obj.display();
    }

}