module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked', // or 'plugin:@typescript-eslint/recommended-type-checked'
    'plugin:@typescript-eslint/stylistic-type-checked', // optional
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  rules: {
    // your custom rules
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
