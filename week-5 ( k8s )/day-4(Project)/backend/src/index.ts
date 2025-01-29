import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()

app.get('/', async(c) => {
  
  

  return c.text('Hello Hono!')

})


app.post("/api/v1/signup",async (c) => {

 try {
   const prisma = new PrismaClient({
     datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate())
 
   const body=await c.req.json();
   const user =await prisma.user.create({
     data:{
       email:body.email,
       password:body.password
     }
   })
 
   const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
   c.status(201);
   return c.json({ jwt });
 } catch (error) {
  
  c.status(403);
  return c.json({ error: "error while signing up" });

 }


})

app.post("/api/v1/signin", async(c) => {
try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body=await c.req.json();
    const user =await prisma.user.findUnique({
      where:{
        email:body.email
      }
    })
    if(!user){
      c.status(403);
      return c.json({ error: "error while signing up" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    c.status(201);
    return c.json({ jwt });
  
} catch (error) {
  
  return c.json({
    message: "try again few minutes later",
  })
}

})
app.post("/api/v1/blog", (c) => {


  return c.json({
    message: "blog route",
  })
})
app.put("/api/v1/blog", (c) => {
  return c.json({
    message: "blog put route",
  })
})
app.get("/api/v1/blog/:id", (c) => {
  const id=c.req.param("id")
  return c.json({
    message: "blog get route by id "
  })
})



export default app
