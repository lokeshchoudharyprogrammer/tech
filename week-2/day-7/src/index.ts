

let user: string = "Sachin";
let age:number=25;
console.log(user);
console.log(age+7);

enum CodeStatus {
    Success = 200,
    Error = 500,
    NotFound = 404,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403

}

const request=():void=>{
    console.log(CodeStatus.Success);
}

request();

let users: readonly string[]  = ["Sachin","Dhoni"];
console.log(users);


type User = {
    name: string;
    age: number;
    email: string;
};

interface IUser {
    name: string;
    age: number;
    email: string;
}

interface Address extends IUser {
    address?: string;
}

const sachin: Address | IUser  = {
    name: "Sachin",
    age: 25,
    email: "Sachin@123",
};

console.log(sachin);


// union type


  
  type Admin = {
    name: string;
    age: number;
    role: string;
  };
  
  type SuperAdmin = {
    name: string;
    age: number;
    role: string;
    access: string[];   
  };


const userNumber=(name?:string):number=>{
    return 1;
}

console.log(userNumber())