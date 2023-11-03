import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();



// Create a benchmark for creating 1000 users with Prisma v5
const createUsersBenchmarkV5 = async () => {
    const start = performance.now();
    await prisma.user.createMany({
        data: Array.from({ length: 1000 }, () => ({
            name: faker.internet.userName(),
            email: faker.internet.email(),
        })),
    });
    const end = performance.now();
    const duration = end - start;

    console.log(`Creating 1000 users with Prisma v5 took ${duration} milliseconds`);
};



//Create a benchmark for querying all users with Prisma v5
const queryUsersBenchmarkV5 = async () => {
    const start = performance.now();
    const users = await prisma.user.findMany();
    const end = performance.now();
    const duration = end - start;

    console.log(`Querying all users with Prisma v5 took ${duration} milliseconds`);
};

// Run the benchmarks
const main = async () => {
    await createUsersBenchmarkV5();
    await queryUsersBenchmarkV5()
}
main();