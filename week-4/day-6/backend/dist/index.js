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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new user
        const newUser = yield prisma.user.create({
            data: {
                name: "Alice",
                email: "alice@example.com",
            },
        });
        console.log("New User:", newUser);
        // Find all users
        const users = yield prisma.user.findMany();
        console.log("All Users:", users);
    });
}
app.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield prisma.user.create({
        data: {
            name: "lokesh",
            email: "lokesh@gmail.com"
        }
    });
    console.log("nw user");
    const users = prisma.user.findMany();
    res.send({
        users
    });
}));
app.get("/", (req, res) => {
    const users = prisma.user.findMany();
    res.send(users);
});
app.listen(3002, () => {
    console.log("Server is  on 3000 welcome");
});
// main()
