import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create a new user
    const user = await prisma.user.create({
        data: {
            email: "4Dh6d@example.com",
            password: "password123",
            name: "John Doe",
        },
    });
    console.log(user);
}

main().then(async () => {
    console.log("Done.");
    await prisma.$disconnect()
}).catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    console.log("Disconnecting...");
    await prisma.$disconnect();
});