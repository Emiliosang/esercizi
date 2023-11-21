const number = 1;

let promise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve("il numero è maggiore di 10")
    } else {
        reject("il numero è minore di 10")
    }
})

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Errore:", error);
  });