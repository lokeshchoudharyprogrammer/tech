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
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/create-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
}));
const { name, email } = req.body;
const create_user = await prisma.user.create({
    data: {
        name,
        email
    }
});
res.json({ "msg": create_user });
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json({ "msg": users });
}));
app.post('/create-post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, authorId } = req.body;
    const create_post = yield prisma.post.create({
        data: {
            title,
            content,
            authorId
        }
    });
    res.json({ "msg": create_post });
}));
app.listen(5000, () => {
    console.log('Server  running on port 5000');
});
