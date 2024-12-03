'use strict';

module.exports = {
  root: true,
  extends: ['@viamrobotics/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    projectService: true,
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: [
        'packages/eslint-config/**/*.js',
        'packages/eslint-config-svelte/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        commonjs: true,
      },
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
