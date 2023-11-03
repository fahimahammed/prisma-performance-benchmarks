import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prismaV4 = new PrismaClient({ prismaVersion: '4' });
const prismaV5 = new PrismaClient({ prismaVersion: '5' });

// Create a benchmark for creating 1000 users with Prisma v4
const createUsersBenchmarkV4 = async () => {
    const start = performance.now();
    await prismaV4.user.createMany({
        data: Array.from({ length: 1000 }, () => ({
            name: faker.name.fullName(),
            email: faker.internet.email(),
        })),
    });
    const end = performance.now();
    const duration = end - start;

    console.log(`Creating 1000 users with Prisma v4 took ${duration} milliseconds`);
};

// Create a benchmark for creating 1000 users with Prisma v5
const createUsersBenchmarkV5 = async () => {
    const start = performance.now();
    await prismaV5.user.createMany({
        data: Array.from({ length: 1000 }, () => ({
            name: faker.name.fullName(),
            email: faker.internet.email(),
        })),
    });
    const end = performance.now();
    const duration = end - start;

    console.log(`Creating 1000 users with Prisma v5 took ${duration} milliseconds`);
};

// Create a benchmark for querying all users with Prisma v4
const queryUsersBenchmarkV4 = async () => {
    const start = performance.now();
    const users = await prismaV4.user.findMany();
    const end = performance.now();
    const duration = end - start;

    console.log(`Querying all users with Prisma v4 took ${duration} milliseconds`);
};

// Create a benchmark for querying all users with Prisma v5
const queryUsersBenchmarkV5 = async () => {
    const start = performance.now();
    const users = await prismaV5.user.findMany();
    const end = performance.now();
    const duration = end - start;

    console.log(`Querying all users with Prisma v5 took ${duration} milliseconds`);
};

// Run the benchmarks
await createUsersBenchmarkV4();
await createUsersBenchmarkV5();
await queryUsersBenchmarkV4();
await queryUsersBenchmarkV5()