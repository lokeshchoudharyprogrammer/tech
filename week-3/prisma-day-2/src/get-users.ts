import { PrismaClient } from "@prisma/client";

// PrismaClient

const prisma =new PrismaClient();

async function main(){

    const user =await prisma.user.findMany({});
    console.log(user);

    const user2=await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            post:true
        }
    });

    console.log(user2);

}

main().then(async()=>{
    console.log("Done.");
    await prisma.$disconnect();
}).catch((e)=>{
    console.error(e);
    process.exit(1);
}).finally(async()=>{
    console.log("Disconnecting...");
    await prisma.$disconnect();
});