export default {
    overrides: [
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        extends: [
          'eslint:recommended', // You can extend other ESLint rules here
          'plugin:react/recommended',
        ],
        rules: {
          // Your custom rules
        },
      },
    ],
  };