const lang = "TypeScript"

console.log(`Hello world from ${lang}`);


//  function's in ts

/**
 * 
 * @param a is a number
 * @param b is a number
 * @returns returns a sum of a and b ( if function return something      datatype then we have to define the return datatype)
 */
const add = (a: number, b: number): number => {
    return a + b
}

console.log(add(1, 2))



/**
 * 
 * @param a is a number
 * @param b is a number
 * @returns void ( its means that function will not return anything)
 * 
 */
const sub = (a: number, b: number): void => {
    console.log(a + b)
}

sub(1, 2)


/**
 * 
 * @param name this is user first name
 * @param lastName  this is user last name {optional}
 */

const greet = (name: string, lastName?: string): void => {
    console.log(`hello ${name}`)
};

greet("shubham");



const greet1 = (name: string, lastName: string = "sharma"): void => {
    console.log(`hello ${name} ${lastName}`)
};


class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
