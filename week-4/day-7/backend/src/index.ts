import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

console.log("no")

app.post('/create-user', async (req, res) => {
    console.log(req.body)
    const {name,email}=req.body
    
    const create_user=await prisma.user.create({
        data:{            
            name,
            email
        }
    })

    res.json({"msg":create_user})
})

app.get('/users', async (req, res) => {
    const users=await prisma.user.findMany()
    res.json({"msg":users})
})

app.post('/create-post', async (req, res) => {
    const {title,content,authorId}=req.body

    const create_post=await prisma.post.create({
        data:{            
            title,
            content,
            authorId
        }
    })   
    res.json({"msg":create_post})
})


app.get('/posts', async (req, res) => {
    const posts=await prisma.post.findMany()
    res.json({"msg":posts})
})




app.listen(5000, () => {
    console.log('Server  running on port 5000')
})