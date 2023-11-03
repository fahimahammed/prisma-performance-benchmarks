import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Create a benchmark for creating 1000 users with Prisma v4
const createUsersBenchmarkV4 = async () => {
    const start = performance.now();
    await prisma.user.createMany({
        data: Array.from({ length: 1000 }, () => ({
            name: faker.internet.userName(),
            email: faker.internet.email(),
        })),
    });
    const end = performance.now();
    const duration = end - start;
    console.log("-----------------------RESULT (Prisma V4)-----------------------");
    console.log(`Creating 1000 users with Prisma v4 took ${duration} milliseconds`);
    console.log("-----------------------------------------------------------------");

};


// Create a benchmark for querying all users with Prisma v4
const queryUsersBenchmarkV4 = async () => {
    const start = performance.now();
    const users = await prisma.user.findMany();
    const end = performance.now();
    const duration = end - start;

    console.log("-----------------------------------------------------------------");
    console.log(`Querying all users with Prisma v4 took ${duration} milliseconds`);
    console.log("-----------------------------------------------------------------");
};


// Run the benchmarks
const main = async () => {
    await createUsersBenchmarkV4();
    await queryUsersBenchmarkV4();
}

main();
