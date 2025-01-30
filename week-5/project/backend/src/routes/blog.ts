import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { auth } from 'hono/utils/basic-auth'
import {createPostInput,updatePostInput} from "medium-common-zod-1"
type Variable = {
  DATABASE_URL: string
  JWT_SECRET: string
  message: string
  userId: string
}
const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: Variable
}>()

blogRouter.use('*', async (c, next) => {
  const authHeader=c.req.header('Authorization') || ''
  const user=await verify(authHeader,c.env.JWT_SECRET)


  if (!user) {
    return c.json({
      "message": "Unauthorized"
    })
  }else{
    // @ts-ignore
    c.set("userId", user.id)
    await next()
  }

})


blogRouter.get("/blogs", async (c) => {
  
    try {
      const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
  
      const posts = await prisma.post.findMany();
   
      return c.json({ posts :posts});
  
    } catch (error) {
      return c.json({
        "message": "Blog not found"
      })    
    }
  
});

  

blogRouter.post('/', async (c) => {
try {
    const body =await c.req.json()
   
      const {success}=createPostInput.safeParse(body)
      if(!success){
        return c.json({
          "message": "Invalid data"
        })
      }
    
    if(!success){
      return c.json({
        "message": "Invalid data"
      })
    }
    const userId = c.get("userId")
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
   
    let blog = await prisma.post.create({
      data: {
        title: body.title,
  
        content: body.content,
  
        authorId: userId,
      },
    })
  
    return c.json({
      id: blog
    })
} catch (error) {
  return c.json({
    "message": "Invalid data"
  })
  
}
})

blogRouter.put('', async (c) => {
try {
    const body =await c.req.json()
  const {success}=updatePostInput.safeParse(body)
  if(!success){
    return c.json({
      "message": "Invalid data"
    })
  }
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
 
    let blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    })
  
    return c.json({
      id: blog.id,
    })
} catch (error) {
  return c.json({
    "message": "Blog not found"
  })
  
}
})
blogRouter.get('/:id', async (c) => {

 try {
   const id = c.req.param('id')
   
   const prisma = new PrismaClient({
     datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate())
 
   let blog = await prisma.post.findFirst({
     where: {
       id: id,
     },
   })
 
   return c.json({
     blog
   })
 
 } catch (error) {
  return c.json({
    "message": "Blog not found"
  })
  
 }
})

// Todo:  add pagination


export default blogRouter
