function isAdult(person) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 17
};

const {id, firstName, lastName, age} = person;

console.log(isAdult(person));