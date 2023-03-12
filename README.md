# Nuxt 3 CarTrader app

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Environment variables

In order to have the authorisation and the persistence running you are going to need a `.env` file on root level which should contain the following values:

- SUPABASE_URL
- SUPABASE_KEY
- DATABASE_URL

## ORM / Prisma

The ORM has been initialised with the command `npx prisma init`. More information regarding the postgres models can be found within the `prisma` directory.
Whenever there is a change or a new model needs to be added, we can update the db by running `npx prisma db push`.
