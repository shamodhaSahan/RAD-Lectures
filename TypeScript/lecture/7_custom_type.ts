
var student_1 = { id: 1, name: "sunil", age: 23, faculty: "CSE" };
var student_2 = { id: 2, name: "amal", age: 25, faculty: "TONIC" };
var student_3 = {
  id: 3,
  name: "kamal",
  age: 32,
  faculty: "CSE",
  uni: "MORATUWA",
};


// create custom type and use for type sefty
// 1. with type
type person = {
  id: number;
  name: string;
  age: number;
  faculty?: string; // optional
  uni?: string; // optional
};
// 2. with interface
interface person2 {
  id: number;
  name: string;
  age: number;
  faculty?: string; // optional
  uni?: string; // optional
}

var students: person[] = []; // create array with student object only acsept with this fields only
var teachers: person2[] = []; 

students.push(student_1);
students.push(student_2);
students.push(student_3);

var techer_1 = { id: 2, name: "sunimal", age: 45 };
var techer_2 = { id: 2, name: "sunimal", age: 45, address: "comolmbo" };

teachers.push(techer_1);
teachers.push(techer_2);

// wrong
// students.push("shamodha");
students.push({ id: 4, name: "nimal"});

console.log(students);
console.log(teachers);
