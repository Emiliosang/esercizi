const isLogged = true;

let firstPromise = new Promise ((resolve, reject) => {
    if(isLogged === true) {
        resolve(Math.random())
    }else {
        reject(new Error("is not logged"))
    }
});


firstPromise
    .then((randomNumber) => {
        console.log("la prima promise è stata risolta", randomNumber);
        return new Promise((resolve, reject) => {
            if (randomNumber < 0.5) {
              resolve({ name: "John", age: 24 });
            } else {
              reject(new Error("is not John"));
            }
          });
    })
    .then((result) => {
        console.log("la seconda promise è stata risolta", result)
    })
    .catch((err) => {
        console.error("la promise è stata rifiutata", err.message)
    })
    .finally(() =>{
        console.log("finally")
    })