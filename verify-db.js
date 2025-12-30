const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const inquiries = await prisma.inquiry.findMany();
    console.log('Inquiries found:', inquiries.length);
    console.log(JSON.stringify(inquiries, null, 2));
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
