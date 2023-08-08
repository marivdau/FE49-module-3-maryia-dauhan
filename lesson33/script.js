'use strict';

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
