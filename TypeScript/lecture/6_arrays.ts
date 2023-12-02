//arrays

// No type safty
// let arr = [1, "2", true];

// wrong
// let nums: number[] = [1, 2, 3, "4", "5", true];
// let texts: string[] = [1, true, "shamodha", "sahan", "kavindu"];
// let numAndText: (number | string)[] = [1, "shamodha", true, "sahan", 200];

var nums: number[] = [1, 2, 3, 4, 5];
var texts: string[] = ["shamodha", "sahan", "kavindu"];
var numAndText: (number | string)[] = [1, "shamodha", 2, "sahan", 3];

var student_1 = { id: 1, name: "sunil", age: 23, faculty: "CSE" };
var student_2 = { id: 2, name: "amal", age: 25, faculty: "TONIC" };
var student_3 = {
  id: 3,
  name: "kamal",
  age: 32,
  faculty: "CSE",
  uni: "MORATUWA",
};


var students: {
    id: number;
    name: string;
    age: number;
    faculty?: string; // optional
    uni?: string; // optional
  }[] = []; 

students.push(student_1);
students.push(student_2);
students.push(student_3);

// wrong
// students.push("shamodha");
// students.push({ id: 4, name: "nimal"});

console.log(students);
console.log(teachers);
