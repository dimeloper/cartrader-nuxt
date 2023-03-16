import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (
    event.context.params &&
    'listingId' in event.context.params
  ) {
    const { listingId } = event.context.params;

    return prisma.message.findMany({
      where: {
        listingId: parseInt(listingId),
      },
    });
  }
});
