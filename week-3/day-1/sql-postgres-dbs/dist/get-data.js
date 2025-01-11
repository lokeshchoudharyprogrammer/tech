"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, service_1.getClient)();
    const users = 'SELECT * FROM TodoUsers';
    const res = yield client.query(users);
    console.log("Users:");
    for (let user of res.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
});
const getTodo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = 'SELECT * FROM todo WHERE user_id=$1';
    const client = yield (0, service_1.getClient)();
    const res = yield client.query(todo, [userId]);
    console.log("Todos:");
    for (let todo of res.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.des}, Done: ${todo.done}`);
    }
});
const userById = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, service_1.getClient)();
    const user = 'SELECT * FROM TodoUsers WHERE email=$1';
    const res = yield client.query(user, [email]);
    console.log("User:");
    for (let user of res.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
});
getUsers();
getTodo(4);
userById("johndoe.gmail.com");
