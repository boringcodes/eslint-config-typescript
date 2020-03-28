module.exports = {
  extends: [
    // https://github.com/standard/eslint-config-standard
    'standard',

    // https://github.com/typescript-eslint/typescript-eslint
    'plugin:@typescript-eslint/eslint-recommended',

    // https://github.com/prettier/eslint-config-prettier#example-configuration
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
  ],

  // https://github.com/typescript-eslint/typescript-eslint
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',

  rules: {
    // https://github.com/standard/standard#typescript
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
