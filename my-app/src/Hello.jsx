import { Message } from "./Message"
export function Hello() {
    return (
    <div>
        <h2>Hello, world</h2>
        <Message />
    </div>
    )
}

//Si, posso usare Hello più di una volta, e il risultato è che il componente viene renderizzato più volte