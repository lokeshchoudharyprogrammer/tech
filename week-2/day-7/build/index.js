"use strict";
let user = "Sachin";
let age = 25;
console.log(user);
console.log(age + 7);
var CodeStatus;
(function (CodeStatus) {
    CodeStatus[CodeStatus["Success"] = 200] = "Success";
    CodeStatus[CodeStatus["Error"] = 500] = "Error";
    CodeStatus[CodeStatus["NotFound"] = 404] = "NotFound";
    CodeStatus[CodeStatus["BadRequest"] = 400] = "BadRequest";
    CodeStatus[CodeStatus["Unauthorized"] = 401] = "Unauthorized";
    CodeStatus[CodeStatus["Forbidden"] = 403] = "Forbidden";
})(CodeStatus || (CodeStatus = {}));
const request = () => {
    console.log(CodeStatus.Success);
};
request();
let users = ["Sachin", "Dhoni"];
console.log(users);
const sachin = {
    name: "Sachin",
    age: 25,
    email: "Sachin@123",
};
console.log(sachin);
const userNumber = () => {
    return 1;
};
console.log(userNumber());
