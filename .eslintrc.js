module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 2018
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'no-console': 'off'
  }
};
