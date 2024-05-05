import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
    const password = await hash("test", 12);
    const user = await prisma.user.upsert({
        where: { email: "test@user.com" },
        update: {},
        create: {
            username: "User Account",
            password,
            email: "test@user.com",
            emailVerified: new Date(),
            image: "/pp/default.svg"
        },
    });
    console.log("USER"+ { user });
}
seed()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });