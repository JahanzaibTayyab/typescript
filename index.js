"use strict";
let num1 = 5;
// if (num1 < 5) {
//   console.log("num1<5");
// } else if (num1 === 5) {
//   console.log("num1===5");
// } else if (num1 > 5) {
//   console.log("num1>5");
// } else {
//   console.log("invalid");
// }
// function sum(num1: number, num2: number) {
//   console.log(num1);
//   num1 = 90;
//   let num = num1 + num2;
//   return num;
// }
// console.log(sum(2, 4));
// let sum1 = () => 3 + 2;
// console.log(sum1());
// console.log(sum(2, 2));
// console.log(sum(5, 7));
// console.log(sum(12, 22));
// const fruits = ["apple", "banana", "orange", "grapes"];
const students = ["PIAIC1", "PIAIC2", "PIAIC3", "PIAIC4"];
students.splice(2, 0, "PIAIC5", "PIAIC6");
const newStudent = students.slice(2);
console.log("🚀 ~ file: index.ts:35 ~ newStudent:", newStudent);
console.log("🚀 ~ file: index.ts:34 ~ students:", students);
