# Performance Benchmark Report: Prisma v4 vs. Prisma v5

## Introduction
The performance comparison between Prisma v4 and Prisma v5 involved testing the duration of creating 1000 users and querying all users within a database using each respective version of Prisma. The goal was to assess the efficiency and speed variations between the two versions.

## Test Results

### Prisma v4

| Test Number | Creating 1000 Users (ms) | Querying All Users (ms) |
|-------------|--------------------------|-------------------------|
| 1           | 541.89                   | 5.15                    |
| 2           | 61.84                    | 8.14                    |
| 3           | 60.38                    | 12.15                   |

### Prisma v5

| Test Number | Creating 1000 Users (ms) | Querying All Users (ms) |
|-------------|--------------------------|-------------------------|
| 1           | 279.59                   | 6.55                    |
| 2           | 40.55                    | 9.72                    |
| 3           | 41.78                    | 12.85                   |

## Observations

1. **Prisma v4** exhibited faster user creation times in its second and third tests compared to its initial run, which showed significantly longer duration for user creation. However, querying all users showed a slight increase in time across the tests.
2. **Prisma v5** consistently displayed improved performance in user creation compared to **Prisma v4** in most instances, indicating enhancements in the efficiency of this operation. However, the querying duration showed a slight increase compared to the creation time.

3. Performance Comparison Graph
![Performance Comparison Graph](https://i.ibb.co/WGsyGYd/image.png)

## Result Analysis
Prisma V5 is significantly faster than Prisma V4, both in terms of creating new users and querying all users. On average, **Prisma V5 is 45.5% faster than Prisma V4.**

## Conclusion
The Prisma performance benchmarks show that Prisma V5 is a significant improvement over Prisma V4 in terms of performance. If you are using Prisma, I recommend upgrading to Prisma V5 as soon as possible.

## Environment Information
The Prisma performance benchmarks were conducted on a machine with the following specifications:

- CPU: Apple M1 chip
- RAM: 8GB
- Storage: 512GB SSD
- Database: PostgreSQL 15

*The recorded performance metrics may vary due to factors like system configuration, internet speed, workload, database size, caching, and software versions.*


## Performance Test Code Repositories

| Prisma Version | Repository URL                                                                                           |
|----------------|---------------------------------------------------------------------------------------------------------|
| Prisma v4      | [fahimahammed/prisma-performance-benchmarks/prismaV4](https://github.com/fahimahammed/prisma-performance-benchmarks/tree/main/prismaV4) |
| Prisma v5      | [fahimahammed/prisma-performance-benchmarks/prismaV5](https://github.com/fahimahammed/prisma-performance-benchmarks/tree/main/prismaV5) |

