/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(arr => {
    if (arr.marks > 50) {
      console.log(arr);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   arr.forEach(arr =>{
    if(arr.marks > 50){
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = { id: 4, name: "susan", age: 20, marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
   arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newStudents = [
    { id: 4, name: "Jessica", age: 22, marks: 60 },
    { id: 5, name: "Thomas", age: 20, marks: 75 },
    { id: 6, name: "Oliver", age: 19, marks: 80 }
  ];
  let combinedArray = arr.concat(newStudents);
  console.log(combinedArray);
}
