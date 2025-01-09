var user = "Sachin";
var age = 25;
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
var request = function () {
    console.log(CodeStatus.Success);
};
request();
var users = ["Sachin", "Dhoni"];
console.log(users);
var sachin = {
    name: "Sachin",
    age: 25,
    email: "Sachin@123",
};
console.log(sachin);
