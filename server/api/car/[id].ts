import cars from '@/data/cars.json';

export default defineEventHandler(
  (event) => {
    if (
      event.context.params &&
      'id' in event.context.params
    ) {
      const { id } =
        event.context.params;

      const car = cars.find(
        (c) => c.id === parseInt(id),
      );

      if (car == null) {
        throw createError({
          statusCode: 404,
          statusMessage: `Car with id of ${id} does not exist.`,
        });
      } else {
        return car;
      }
    }
  },
);
