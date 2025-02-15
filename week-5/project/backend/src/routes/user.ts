import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import {signupInput,signinInput} from "medium-common-zod-1"

type Variable = {
    DATABASE_URL: string,
    JWT_SECRET: string
    message: string
  }
const userRouter=new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
  Variable: Variable
}>()

userRouter.post('/signup', async (c) => {

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  // const {success}=signupInput.safeParse(body)

  // if(!success){
  //   c.status(400);
  //   return c.json({
  //     "message": "Invalid input"
  //   })
  // }

	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
        name:body.name
			}
		});
	
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		 c.status(403);
     return c.json({ error: "error while signing up" });
	}
})

userRouter.post("/signin", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
const {success}=signinInput.safeParse(body)
if(!success){
  c.status(400);
  return c.json({
    "message": "Invalid input"
  })
}
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })
    if (!user) {
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


export default userRouter