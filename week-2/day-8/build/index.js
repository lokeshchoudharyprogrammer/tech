var lang = "TypeScript";
console.log("Hello world from ".concat(lang));
//  function's in ts
/**
 *
 * @param a is a number
 * @param b is a number
 * @returns returns a sum of a and b ( if function return something      datatype then we have to define the return datatype)
 */
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
/**
 *
 * @param a is a number
 * @param b is a number
 * @returns void ( its means that function will not return anything)
 *
 */
var sub = function (a, b) {
    console.log(a + b);
};
sub(1, 2);
/**
 *
 * @param name this is user first name
 * @param lastName  this is user last name {optional}
 */
var greet = function (name, lastName) {
    console.log("hello ".concat(name));
};
greet("shubham");
var greet1 = function (name, lastName) {
    if (lastName === void 0) { lastName = "sharma"; }
    console.log("hello ".concat(name, " ").concat(lastName));
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
