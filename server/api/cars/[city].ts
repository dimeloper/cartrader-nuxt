import cars from '@/data/cars.json';

export default defineEventHandler(
  (event) => {
    if (
      event.context.params &&
      'city' in event.context.params
    ) {
      const { city } =
        event.context.params;

      let filteredCars = cars;

      filteredCars =
        filteredCars.filter(
          (car) =>
            car.city.toLowerCase() ===
            city.toLowerCase(),
        );

      const {
        make,
        minPrice,
        maxPrice,
      } = getQuery(event);

      if (
        make &&
        typeof make === 'string'
      ) {
        filteredCars =
          filteredCars.filter(
            (car) =>
              car.make.toLowerCase() ===
              make.toLowerCase(),
          );
      }

      if (
        minPrice &&
        typeof minPrice === 'string'
      ) {
        filteredCars =
          filteredCars.filter(
            (car) =>
              car.price >=
              parseInt(minPrice),
          );
      }

      if (
        maxPrice &&
        typeof maxPrice === 'string'
      ) {
        filteredCars =
          filteredCars.filter(
            (car) =>
              car.price <=
              parseInt(maxPrice),
          );
      }

      return filteredCars;
    }

    return cars;
  },
);
