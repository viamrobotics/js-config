'use strict';

module.exports = {
  root: true,
  extends: ['@viamrobotics/eslint-config'],
  env: {
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
