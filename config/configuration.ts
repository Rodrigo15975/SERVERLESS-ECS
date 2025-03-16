export default () => ({
  port: parseInt(process.env.PORT ?? '4000'),
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  },
  NODE_ENV: process.env.NODE_ENV ?? 'development',
})
