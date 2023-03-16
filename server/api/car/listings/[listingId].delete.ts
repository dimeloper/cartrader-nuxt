import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(
  async (event) => {
    if (
      event.context.params &&
      'listingId' in
        event.context.params
    ) {
      const { listingId } =
        event.context.params;

      await prisma.car.delete({
        where: {
          id: parseInt(listingId),
        },
      });

      return {
        deleted: true,
        listingId,
      };
    } else {
      throw Error(
        'ListingId has not been provided.',
      );
    }
  },
);
