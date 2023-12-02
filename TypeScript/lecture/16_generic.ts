// generic

class Student {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let arr_1: number[] = [1, 3, 2, 4, 5];
let arr_2: string[] = ["kamal", "nimal", "sunimal"];
let arr_3: Student[] = [
    new Student("kamal", 25),
    new Student("nimal", 26),
    new Student("sunimal", 23),
    new Student("somapala", 22)
];

// can use union but it has array data types limit
// so we can use generic this time use T for identify type
let removeLastItem = <T>(arr: T[]): T[] => {
    return arr.slice(0, arr.length - 1);
}

// method call time set type for T
let results_1 = removeLastItem<number>(arr_1);
let results_2 = removeLastItem<string>(arr_2);
let results_3 = removeLastItem<Student>(arr_3);

class SmartArray<T> {
    private arr: T[];

    constructor(arr: T[]) {
        this.arr = arr;
    }

    getArray(): T[] {
        return this.arr;
    }
}

new SmartArray<number>(arr_1);
new SmartArray<string>(arr_2);
new SmartArray<Student>(arr_3);