import { PrismaClient } from "@prisma/client";

// PrismaClient

const prisma=new PrismaClient({
    log:["info","warn","error","query"]
});

async function main(){

    let res=await prisma.user.findMany({
        where: {
            email: "lokesh@cz.com"
        },
        // post:{
        //     some:{
        //         title:"Hello World"
        //     }
        // },
        include:{
            post:{
                where:{
                    title:"Hello World"
                }
            }
        }
    })

    console.log(res);
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