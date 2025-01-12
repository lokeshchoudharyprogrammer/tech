import { getClient } from "../service";


async function getAllTodosWithUserDetails() {
    const client = await getClient();

    const joinQuery = `
        SELECT todo.*, todousers.*
        FROM todo
        JOIN todousers ON todo.user_id = todousers.id;
    `;

    const res = await client.query(joinQuery);
    const results = res.rows;

    console.log("Todos with User Details:", results);
}

getAllTodosWithUserDetails();
