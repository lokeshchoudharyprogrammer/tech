import express,{ Request,Response } from "express"
import cors from "cors";
import {UserType} from "@repo/common/config"


const app=express();

app.use(cors())
app.get("/",(req:Request,res:Response)=>{
    res.json({
        "msg":" Hello How are you 🤔",
        UserType
    })
})
app.listen(12000,()=>{
 
    console.log("server run 12000")
})