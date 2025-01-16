import { Hono } from 'hono'
import { Client } from "pg";

const app = new Hono()



export const connectionToDB = async () => {

  const client = new Client(process.env.DATABASE_URL);
  
  client.connect();
  return client;
  
}

function authMiddleware(c:any,next:any) {
  if(c.req.header("Authorization") !== 'Bearer 1234567890') {
    return new Response('Unauthorized', { status: 401 })
  }else{
    next();
  }
  
}

app.post('/', async (c) => {
  const client = await connectionToDB();
 const createAddress=`
  CREATE TABLE IF NOT EXISTS address (
    id SERIAL PRIMARY KEY,
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255)
  )`
  const res=await client.query(createAddress);

  const createUsers=`
  CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)  UNIQUE NOT NULL, 
  password VARCHAR(255) NOT NULL,
  address_id INTEGER,
  FOREIGN KEY (address_id) REFERENCES address(id)
  )`
  const res2=await client.query(createUsers);

  console.log(res);
  return  c.text(res)
});


app.get('/get-users', async (c) => {
  const client=await connectionToDB();

  const getUserQuery =`
  SELECT  *  FROM users
  `

  const res=await client.query(getUserQuery);
  console.log(res);
  return c.text(res)

})





app.post('/',authMiddleware, async(c) => {
  //  body header query params middleware , connections to db
  const body=await c.req.json();
  console.log(body);
  const headers=await c.req.header("Authorization");
  console.log(headers);
  const query=await c.req.query("name");
  console.log(query);
  return c.text('Hello Hono!')
})



export default app


