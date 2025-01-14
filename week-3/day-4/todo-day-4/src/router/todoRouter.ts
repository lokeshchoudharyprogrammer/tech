import express,{  Request ,Response} from 'express';
import { createTodo, getTodos } from '../models/todo';
import { TodoMessage } from '../types/constants/TodoMessage';

const todoRouter=express.Router();

todoRouter.get("/",(req:Request,res:Response)=>{
    res.send("this is todo router");
})

todoRouter.post("/create",async(req:Request,res:Response)=>{

   try {    
     const {title,content,author_id}=req.body;
     console.log(title,content,author_id);
     await createTodo({title,content,author_id});     
     res.status(200).json({message:TodoMessage.TODO_CREATED});
   } catch (error) {
    res.status(500).json({error:TodoMessage.INTERNAL_ERROR});
    
   }
})

todoRouter.get("/get/:id",async(req:Request,res:Response)=>{
    try {
        const id=req.params.id;
        const todo=await getTodos(Number(id));
        res.status(200).json(todo);
        
    } catch (error) {
        res.status(500).json({error:TodoMessage.INTERNAL_ERROR});        
    }
})

export default todoRouter;