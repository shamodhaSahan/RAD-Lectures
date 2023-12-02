// abstract

abstract class Animal {
    abstract move(): void;

    eat(): void {
        console.log("Animal is eating");
    }
}

class Cat extends Animal {
    move(): void {
        console.log("cat is moving")
    }
}

class Bird extends Animal {
    move(): void {
        console.log("dog is moving")
    }
}

let animal_1: Animal = new Cat();
animal_1.eat();
animal_1.move();

let animal_2: Animal = new Bird();
animal_2.eat();
animal_2.move();
