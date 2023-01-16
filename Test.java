
class Fruit {

}

class Mango extends Fruit {

}

class Banana extends Mango {

}

class A {
    Fruit building() {
        System.out.println("1 floor");

        Fruit f = new Fruit();

        return f;

    }

}

class B extends A {

    Banana building() {
        System.out.println("2 floor");
        return new Banana();
    }
}