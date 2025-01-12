import { getClient } from "./service";

const InsertData=async()=>{

    const client = await getClient();

    const insertUserText='INSERT INTO TodoUsers (email,password) VALUES ($1 ,$2) RETURNING id';

    const userData=['johndSoe.gmail.com','password123'];

    let res=await client.query(insertUserText,userData);

    const todoText= 'INSERT INTO todo (title,des,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id';

    await client.query(todoText,['Buy groceries','Milk,bread, and eggs',res.rows[0].id,false]);

    console.log("Entries created!");

}

InsertData();