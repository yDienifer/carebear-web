import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default [
  {
    languageOptions: {
      globals: {
      },
      parserOptions: {
        ecmaVersion: 14,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
    },

    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },

    ignores: ['.next/', 'node_modules/', 'build/'],
  },
];
