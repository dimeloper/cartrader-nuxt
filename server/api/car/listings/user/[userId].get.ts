import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(
  async (event) => {
    if (
      event.context.params &&
      'userId' in event.context.params
    ) {
      const { userId } =
        event.context.params;

      return prisma.car.findMany({
        where: {
          listerId: userId,
        },
        select: {
          image: true,
          id: true,
          name: true,
          price: true,
        },
      });
    } else {
      throw Error(
        'UserId has not been provided.',
      );
    }
  },
);
