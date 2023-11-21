class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
const temStr = `${developer.firstName} ${developer.lastName}`;
console.log(temStr);
