function identity<Type>(value: Type): Type {
    return value;
}

let value1 = identity<string>("France");

let value2 = identity<number>(67_413_000);

async function fetchData<Type>(url: string): Promise<Type> {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}

let user = await fetchData<User>("http://api.com/user/1");

console.log(user.name);

export {};