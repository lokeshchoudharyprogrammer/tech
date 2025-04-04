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
const service_1 = require("../service");
function getAllTodosWithUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, service_1.getClient)();
        const joinQuery = `
        SELECT todo.*, todousers.*
        FROM todo
        JOIN todousers ON todo.user_id = todousers.id;
    `;
        const res = yield client.query(joinQuery);
        const results = res.rows;
        console.log("Todos with User Details:", results);
    });
}
getAllTodosWithUserDetails();
