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
exports.getClient = void 0;
const pg_1 = require("pg");
const getClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client('postgresql://testApplication_owner:j7ZbdKWnSO2q@ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech/testApplication?sslmode=require');
    client.connect();
    return client;
});
exports.getClient = getClient;
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, exports.getClient)();
        const createUserTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    `;
        try {
            const res = yield client.query(createUserTableQuery);
            console.log("Table created successfully:", res);
        }
        catch (err) {
            console.error("Error creating table:", err);
        }
        finally {
            yield client.end();
        }
    });
}
// createUsersTable()
function InsertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, exports.getClient)();
        const insertDataQuery = `

    INSERT INTO users (name,email,password) values ($1,$2,$3) returning id;

    `;
        const res = yield client.query(insertDataQuery, ['john', 'johndSoe.gmail.com', 'password123']);
        console.log(res.rows);
    });
}
// InsertData();
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, exports.getClient)();
        const getQuery = `
    SELECT FROM users* 
    `;
        const res = yield client.query(getQuery);
        console.log(res);
    });
}
function GetUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let client = yield (0, exports.getClient)(); // Ensure client connection is established
            const query = 'SELECT * FROM users WHERE id = $1';
            const values = [id];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
    });
}
GetUserById(1);
