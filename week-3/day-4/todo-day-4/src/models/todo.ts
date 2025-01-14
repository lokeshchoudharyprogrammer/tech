import { PrismaClient } from "@prisma/client";
import { Todo } from "../types/interface/User.interface";
import { ValidationMessages } from "../types/constants/ValidationMessages";
import { TodoMessage } from "../types/constants/TodoMessage";

const prisma = new PrismaClient();

export const createTodo = async ({title,content,author_id}:Todo) => {
    
   try {
     if(!title || !content || !author_id){
         return ValidationMessages.REQUIRED
     }
      await prisma.todo.create({
         data:{
             title:title,
             content:content,
             author_id:author_id
         }
     });
     return TodoMessage.TODO_CREATED
   } catch (error) {
    return TodoMessage.INTERNAL_ERROR;    
   }   

}

export const getTodos = async (author_id: number) => {

   try {
     let res = await prisma.todo.findMany({
         where: {
             author_id: author_id
         }
     })
     return res;
   } catch (error) {
    return TodoMessage.INTERNAL_ERROR;
    
   }
}



export default { createTodo, getTodos }