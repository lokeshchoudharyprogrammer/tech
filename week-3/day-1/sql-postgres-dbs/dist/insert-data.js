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
const InsertData = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, service_1.getClient)();
    const insertUserText = 'INSERT INTO TodoUsers (email,password) VALUES ($1 ,$2) RETURNING id';
    const userData = ['johndoe.gmail.com', 'password123'];
    let res = yield client.query(insertUserText, userData);
    const todoText = 'INSERT INTO todo (title,des,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id';
    yield client.query(todoText, ['Buy groceries', 'Milk,bread, and eggs', res.rows[0].id, false]);
    console.log("Entries created!");
});
InsertData();
