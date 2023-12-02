// class

class Person {
    id: number;
    readonly name: string;
    isAdmin: boolean;
    constructor(id: number, name: string, isAdmin: boolean) {
      this.id = id;
      this.name = name;
      this.isAdmin = isAdmin;
    }
  }
  
  let person_1 = new Person(1, "kamal", true);
  person_1.id = 2;
  
  // wrong it is read only prperti value added by constructor
  // person_1.name = "amal";
  
  console.log(person_1);
  
  // wrong
  // let person_2 = new Person('1', "kamal", true);
  // let person_2 = new Person(1, "kamal", "true");
