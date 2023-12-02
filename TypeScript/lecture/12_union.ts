// union - ekama varible ekakata values type kihipayak danna puluwan

let data: (number | string | boolean)[] = ["string", 1, 1, true];

class Student {
    id: number;
    name: string;
    college: string;
    faculty: string;
}

class Teacher {
    id: number;
    name: string;
    subject: string;
    college: string;
}

class Soldier {
    id: number;
    name: string;
}

let school_members: (Student | Teacher )[] = [];
school_members.push(new Student());
school_members.push(new Teacher());

// wrong
// school_members.push(new Soldier())