import { Client } from "pg";

export const getClient = async () => {
    const client = new Client('postgresql://testApplication_owner:j7ZbdKWnSO2q@ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech/testApplication?sslmode=require');
    client.connect();
    return client;
}

async function createUsersTable() {
    const client = await getClient();
    const createUserTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        const res = await client.query(createUserTableQuery);
        console.log("Table created successfully:", res);
    } catch (err) {
        console.error("Error creating table:", err);
    } finally {
        await client.end();
    }
}
// createUsersTable()


async function InsertData() {
    const client = await getClient();
    const insertDataQuery = `

    INSERT INTO users (name,email,password) values ($1,$2,$3) returning id;

    `;

    const res = await client.query(insertDataQuery, ['john', 'johndSoe.gmail.com', 'password123']);

    console.log(res.rows);

}

// InsertData();

async function getUsers() {

    const client = await getClient();

    const getQuery=`
    SELECT FROM users* 
    `
    const res=await client.query(getQuery);
    console.log(res)

    
    
}

export async function GetUserById(id?:number){
    try {
        let client = await getClient(); // Ensure client connection is established
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [id];
        const result = await client.query(query, values);
        
        if (result.rows.length > 0) {
          console.log('User found:', result.rows[0]); // Output user data
          return result.rows[0]; // Return the user data
        } else {
          console.log('No user found with the given email.');
          return null; // Return null if no user was found
        }
      } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
      } 
}

// join tables
export async function joinTables(){
    try {
        let client = await getClient(); // Ensure client connection is established
        const query = `
        SELECT u.id, u.name, u.email, u.password, u.created_at, u.updated
        FROM users u
        JOIN orders o ON u.id = o.user_id
        `;
        const result = await client.query(query);
        console.log(result.rows);
      } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
      } 
}

