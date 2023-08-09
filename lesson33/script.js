'use strict';
//Lesson 33
const users = [
  {
    id: 1,
    username: "Michael Lawson",
    age: 22,
  },
  {
    id: 2,
    username: "Tom Spot",
    age: 32,
  },
  {
    id: 3,
    username: "Kate Ford",
    age: 18,
  }
];

const sumAge = users.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
const avgAge = sumAge / users.length;
console.log(`Average age ${avgAge}`);

users.sort((a, b) => {
  return b.age - a.age;
});
console.log(users);

const desireAge = 22;
const existingUserWithAge = users.some((element) => element.age === desireAge)
console.log(`Do we have a user with age = 22? Answer: ${existingUserWithAge}`);

//Homework 33
const subjects = {
  mathematics: {
    students: 200,
    teachers: 6
  },
  biology: {
    students: 120,
    teachers: 6
  },
  geography: {
    students: 60,
    teachers: 2
  },
  chemistry: {
    students: 100,
    teachers: 3
  }
}

//1
const subjectsName = Object.keys(subjects).join();
console.log(`Список предметов: ${subjectsName}`);

const studentsAmount = Object.values(subjects).reduce((accumulator, currentValue) => accumulator + currentValue.students, 0)
console.log(`Общее количество студентов: ${studentsAmount}`)
const teachersAmount = Object.values(subjects).reduce((accumulator, currentValue) => accumulator + currentValue.teachers, 0)
console.log(`Общее количество учителей: ${teachersAmount}`)
//3
const averageStudentsNumber = studentsAmount / Object.keys(subjects).length;
console.log(`Среднее число студентов ${averageStudentsNumber}`)
//4
const arrayToPush = [];
for (let i in subjects) {
  arrayToPush.push(subjects[i]);
}
const arrayOfObjects = JSON.stringify(arrayToPush);
console.log(`Массив из объектов предметов: ${arrayOfObjects}`);
//5
const sorted = Object.fromEntries(
  Object.entries(subjects).sort(([, a], [, b]) => b.teachers - a.teachers)
)
const subjectsListTeachersNumberDesc = Object.keys(sorted);
console.log(`Массив из предметов сортированный по количеству преподавателей от большего к меньшему: ${subjectsListTeachersNumberDesc}`)
