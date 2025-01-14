// src/routes/index.ts
import express, { Request, Response } from "express";
import { createUser, loginUser } from "../models/user";
import { User } from "../types/interface/User.interface";

const UserRouter = express.Router();

UserRouter.get("/", (req: Request, res: Response) => {
    res.send({ message: "Hello World " });
});


UserRouter.post('/register',async(req:Request,res:Response)=>{
    
    try {
        const {name,email,password}=req.body;
        console.log(name,email,password);
        const user =await createUser({name,email,password});
        res.json(user);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }

});

UserRouter.post('/login',async(req:Request,res:Response)=>{
    
    try {
        const {email,password}=req.body;
        console.log(email,password);
        const user =await loginUser(email,password);
        
    
    const {findUser,token}=user as {findUser:User,token:string};
    console.log(token);

    res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', 
        maxAge: 3600000, 
    });

    res.json({ message: 'Login successful',user:findUser ,token});
    
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }

})


export default UserRouter;