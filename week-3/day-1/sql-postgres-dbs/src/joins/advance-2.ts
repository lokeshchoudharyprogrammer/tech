import { getClient } from "../service";


//  this shouldnt return a row if no todo was found
async function getUserAndUserTodosJoin(userId: number) {
    const client = await getClient();

    const joinQuery=`
    SELECT todousers.* , todo.*
    FROM todousers
    JOIN todo ON todousers.id = todo.user_id
    WHERE todousers.id = $1
    `
    const res = await client.query(joinQuery,[userId])
    console.log(res.rows);
}

getUserAndUserTodosJoin(1);