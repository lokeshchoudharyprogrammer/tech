import { getClient } from "./service";

// getClient

async function deleteTodo(id:number){
    const client =await getClient();
    const deleteQuery='DELETE FROM todo WHERE id=$1 RETURNING id';

    const res=client.query(deleteQuery,[id]);
    console.log(res);
    console.log("Entries deleted!");

}

deleteTodo(1);


