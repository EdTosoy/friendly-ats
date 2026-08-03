import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './libs/database/src/migrations',
  schema: './libs/database/src/schema/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.[DATABASE_URL] || 'check you ENV',
  },
});
