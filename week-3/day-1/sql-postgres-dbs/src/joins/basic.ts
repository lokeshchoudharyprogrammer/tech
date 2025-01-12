import { getClient } from "../service";

async function getUserAndUserTodos(userId: number) {
    const client= await getClient();

    const userQuery='SELECT * FROM todousers WHERE id=$1';
    const res=await client.query(userQuery,[userId]);
    const user=res.rows[0];
    console.log(user);

    const todoQuery='SELECT * FROM todo WHERE user_id=$1';
    const res2=await client.query(todoQuery,[userId]);
    const todos=res2.rows;
    console.log(todos);
}

getUserAndUserTodos(7);