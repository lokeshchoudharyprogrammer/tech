import express, { Request, Response } from "express";
import router from "./api/api";
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', router);

app.use
app.listen(4000, () => {
    console.log("Server is running on port 3000");
});