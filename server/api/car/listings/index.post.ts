import Joi from 'joi';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const schema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number()
    .min(1886)
    .max(new Date().getFullYear() + 1),
  miles: Joi.number().min(0),
  city: Joi.string().min(2).required(),
  numberOfSeats: Joi.number()
    .max(1000)
    .min(1)
    .required(),
  features: Joi.array()
    .items(Joi.string())
    .required(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().min(0),
  name: Joi.string().required(),
  description: Joi.string().min(20).required(),
});

export default defineEventHandler(
  async (event) => {
    const body = await readBody(event);

    if (body == null) {
      return 'You have to provide the listing information.';
    }

    const { value, error } =
      await schema.validate(body);

    if (error) {
      return createError({
        statusCode: 412,
        statusMessage: error.message,
      });
    }

    const {
      image,
      make,
      model,
      numberOfSeats,
      miles,
      price,
      features,
      name,
      description,
      listerId,
      city,
    } = body;

    const car = await prisma.car.create({
      data: {
        image,
        make,
        model,
        numberOfSeats,
        miles,
        price,
        features,
        name,
        description,
        listerId,
        city: city.toLowerCase(),
      },
    });

    return { value, error };
  },
);
