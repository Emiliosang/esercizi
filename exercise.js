const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

person2.firstName = "Simon"

// ho creato un secondo oggetto "person2" con le stesse caratteristiche di "person1" con Object.assign, e poi ho modificato il nome con person2.firstname
// prima invece se avessi modificato il nome di person2 si sarebbe modificato anche il nome in person1, perché facendo person2 = person1 prendono gli stessi valori

console.log(person1);
console.log(person2);
