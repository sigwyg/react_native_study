module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [ 'react', '@typescript-eslint', ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
    "prettier/react",
  ],
};
