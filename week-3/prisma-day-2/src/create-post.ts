import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient({log:['info','warn','error','query']});


const main=async()=>{
    await prisma.post.createMany({
        data:{
            title:"Hello World",
            content:"This is a test post",
            author_id:1
        }
    })
}

main().then(async()=>{
    console.log("Posts created");
}).catch(async(e)=>{
    console.error(e);
    process.exit(1);
    await prisma.$disconnect();
})