function identity<T>(arg: T): T {
    return arg;
}

let salida1 = identity<string>("myString");
let salida2 = identity<number>(5);

console.log(salida1)
console.log(salida2)

