import { defineConfig } from 'eslint/config';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextTypescript,
  {
    files: ['**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        { patterns: ['react', 'react/*', 'next', 'next/*', '@/components/*'] },
      ],
    },
  },
]);
