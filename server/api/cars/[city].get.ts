import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  if (
    event.context.params &&
    'city' in event.context.params
  ) {
    const { city } = event.context.params;

    const filters: {
      city: string;
      make?: string;
      price?: { gte?: number; lte?: number };
    } = {
      city: city.toLowerCase(),
    };

    const { make, minPrice, maxPrice } = getQuery(event);

    if (make && typeof make === 'string') {
      filters.make = make;
    }

    if (minPrice || maxPrice) {
      filters.price = {};
    }

    if (
      minPrice &&
      typeof minPrice === 'string' &&
      filters.price
    ) {
      filters.price.gte = parseInt(minPrice);
    }

    if (
      maxPrice &&
      typeof maxPrice === 'string' &&
      filters.price
    ) {
      filters.price.lte = parseInt(maxPrice);
    }

    return prisma.car.findMany({
      where: filters,
    });
  }

  return prisma.car.findMany();
});
