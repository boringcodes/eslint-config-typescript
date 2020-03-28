module.exports = {
  extends: [
    // https://github.com/standard/eslint-config-standard-with-typescript
    'standard-with-typescript',

    // https://github.com/prettier/eslint-config-prettier#example-configuration
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
  ],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
};
