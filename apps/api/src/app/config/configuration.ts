import { env } from './env.validation';

export default () => ({
  app: {
    port: env.PORT,
    nodeEnv: env.NODE_ENV,
  },

  database: {
    url: env.DATABASE_URL,
  },

  redis: {
    url: env.REDIS_URL,
  },

  rabbitmq: {
    url: env.RABBITMQ_URL,
  },

  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  },
});
