// class student {
//   constructor(name, rollNumber, skill) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.skill = skill;
//   }
// }

// class data {
//   constructor() {
//     this.students = [];
//   }
//   addStudent(name, rollN, skill) {
//     this.students.push(new student(name, rollN, skill));
//   }
//   deleteStudent(rollN) {
//     this.students = this.students.filter(
//       (student) => student.rollNumber != rollN
//     );
//   }
//   seeAllStudent() {
//     this.students.map((student) => {
//       console.log(
//         `name is ${student.name} rollN is ${student.rollNumber} and skill is ${student.skill}`
//       );
//     });
//   }
//   getDetailsOnRollNumber(rollNum) {
//     let s = this.students.find((item) => item.rollNumber === rollNum);
//     if (s) {
//       console.log(
//         `name is ${s.name} rollN is ${s.rollNumber} and skill is ${s.skill}`
//       );
//     } else {
//       console.log("roll number does not exist");
//     }
//   }
//   getDetailsOnName(searchName) {
//     let naam = this.students.find((item) => item.name === searchName);
//     if (searchName) {
//       console.log(
//         `name is ${naam.name} rollN is ${naam.rollNumber} and skill is ${naam.skill}`
//       );
//     } else {
//       console.log("Name does not exist");
//     }
//   }
// }

// let list = new data();
// list.addStudent("abdul", 1, "Java");
// list.addStudent("uzair", 2, "html");
// list.addStudent("musavvir", 3, "css");
// list.seeAllStudent();
// // list.deleteStudent(3);
// list.seeAllStudent();
// list.getDetailsOnRollNumber(3);
// list.getDetailsOnName("uzair");

class employee {
  constructor(id, name, skill) {
    this.id = id;
    this.name = name;
    this.skill = skill;
  }
}

class employeeData {
  constructor() {
    this.employees = [];
  }
  addEmpName(id, name, skill) {
    this.employees.push(new employee(id, name, skill));
  }
  deleteDataOnId(id, name, skill) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
  showData() {
    this.employees.map((data) => {
      console.log(
        `id is ${data.id} name is ${data.name} and skill is ${data.skill}`
      );
    });
  }
}

let employeeList = new employeeData();
employeeList.addEmpName(1, "uzair", "frontend developer");
employeeList.addEmpName(2, "ahmed", "frontend developer");
employeeList.addEmpName(3, "saleh", "full stack developer");
// employeeList.deleteDataOnId(2);
employeeList.showData();
