async function fetched(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if(response.ok){    
            const data = await response.json();
            return data;
        } else {
            throw new Error("errore con la richiesta http");
        }
    } catch (err) {
        console.error( err)
    }
}

fetched()
    .then((todos) => {
        console.log(todos)
    })
    .catch((error) => {
        console.error(error)
    })
