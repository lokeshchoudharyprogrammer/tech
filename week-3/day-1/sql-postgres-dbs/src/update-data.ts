import { getClient } from "./service";

// getClient

async function UpdateTodo(id:number,done:boolean){
    const client =await getClient();
    const updateTodoText='UPDATE todo SET done=$1 WHERE id=$2 RETURNING id';
    const res=await client.query(updateTodoText,[done,id]);
    return res.rows[0].id;
}

console.log(UpdateTodo(2,false));