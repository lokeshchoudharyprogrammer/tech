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
exports.getClient = getClient;
const pg_1 = require("pg");
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client("postgresql://testApplication_owner:j7ZbdKWnSO2q@ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech/testApplication?sslmode=require");
        yield client.connect();
        return client;
    });
}
// postgresql://testApplication_owner:j7ZbdKWnSO2q@ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech/testApplication?sslmode=require
// this is password =>j7ZbdKWnSO2q
// this is username => testApplication_owner
// this is endpoint => ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech
// this is database => testApplication
// this is sslmode => require
// this is port => 5432
