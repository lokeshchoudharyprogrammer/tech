import { PrismaClient } from "@prisma/client";

// PrismaClient

const prisma =new PrismaClient();

async function main(){


    const user2=await prisma.user.update({
        where:{
            id:1
        },
        data:{

            name:"Lokesh cz",
            email:"lokesh@cz.com",
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