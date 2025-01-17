import { Hono } from 'hono'
import 'dotenv/config'
import pg from "pg"




const { Client } = pg
const app = new Hono()

export const dataBaseConnection = async (c?:any) => {
  const client = new Client({
    connectionString: c.env.DATA_BASE_URL
  })
  await client.connect()
  return client;
}




app.post("/create-table", (async(c)=>{

  const client = await dataBaseConnection(c);
  const create=`
  CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
  )
  `

  const result = await client.query(create);
  console.log(result);
  return c.json(result);

}));

const insertUser = async (c:any) => {
  const client = await dataBaseConnection(c);
  const insert = `INSERT INTO users (name, email, password) VALUES ('John Doe', 'c5G7g@example.com', 'password123')`;
  const result = await client.query(insert);
  console.log(result);
  return c.json(result);
};

app.post("/insert-user", insertUser);


app.get('/users', async (c) => {
  const client = await dataBaseConnection(c);
  const result = await client.query("SELECT * FROM users");
  return c.json(result.rows);
})

app.get('/db', async (c) => {
  const client = await dataBaseConnection(c);
  const result = await client.query("SELECT  name, email FROM User");

  if (result.rows.length === 0) {
    console.error('No data found in the User table');
    return c.json({ error: 'No data found' }, 404);
  }

  console.log(result.rows[0].id);
  return c.json(result.rows[0]);
});


  // Root route
app.get('/', (c) => {
    console.log(c.env) // Logs the entire environment object
    return c.text(JSON.stringify(c.env))
})

// Environment route
app.get('/env', (c) => {
  const SECRET_KEY = c.env.API_TOKEN // Replace 'SECRET_KEY' with the actual key you have set
  if (!SECRET_KEY) {
    console.error('SECRET_KEY is not defined in the environment variables.')
    return c.text('Environment variable SECRET_KEY is not set.', 500)
  }
  console.log(SECRET_KEY) // Logs the value of SECRET_KEY
  return c.text(`SECRET_KEY: ${SECRET_KEY}`)
})

export default app
