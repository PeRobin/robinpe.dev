import eslintPluginPrettier from 'eslint-plugin-prettier';
import solid from 'eslint-plugin-solid';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      solid,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...solid.configs.recommended.rules,
      'prettier/prettier': ['warn', {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5'
      }]
    }
  }
];
