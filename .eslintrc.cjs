module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'import/extensions': ['error', 'always'],
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
  },
}
