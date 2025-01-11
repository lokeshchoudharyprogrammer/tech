import { getClient } from "./service";

async function createTable(){
    const createUserTableQuery= ` 
        CREATE TABLE TodoUsers  (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        );
    `;
    const client =await getClient();
    await client.query(createUserTableQuery);

    const createTodosQuery= `
       
        CREATE TABLE todo (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        des VARCHAR(255),
        user_id INTEGER REFERENCES TodoUsers(id),
        done BOOLEAN DEFAULT FALSE
        )
    
    `
    await client.query(createTodosQuery);

    console.log("Table created successfully!");
}


createTable();