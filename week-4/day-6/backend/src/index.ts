import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express,{Request,Response} from "express";
const app = express();


async function main() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });
  console.log("New User:", newUser);

  // Find all users
  const users = await prisma.user.findMany();
  console.log("All Users:", users);
}

app.post("/create-user",async(req:Request,res: Response)=>{

  const newUser=await prisma.user.create({
    data:{
      name:"lokesh",
      email:"lokesh@gmail.com"
    }
  })

  console.log("nw user")
  const users=prisma.user.findMany();

  res.send({
    users
  })


})


app.get("/",(req:Request,res:Response)=>{
 const users=prisma.user.findMany()
 res.send(users)
})

app.listen(5002, () => {
  console.log("Server is  on 3000 welcome");
});
// main()