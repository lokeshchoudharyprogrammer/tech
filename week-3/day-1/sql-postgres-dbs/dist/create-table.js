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
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const createUserTableQuery = ` 
        CREATE TABLE TodoUsers  (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        );
    `;
        const client = yield (0, service_1.getClient)();
        yield client.query(createUserTableQuery);
        const createTodosQuery = `
       
        CREATE TABLE todo (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        des VARCHAR(255),
        user_id INTEGER REFERENCES TodoUsers(id),
        done BOOLEAN DEFAULT FALSE
        )
    
    `;
        yield client.query(createTodosQuery);
        console.log("Table created successfully!");
    });
}
createTable();
