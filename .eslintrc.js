module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "semi": "off",
    '@typescript-eslint/semi': "error",
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  }
};
