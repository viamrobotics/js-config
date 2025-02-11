import { baseConfig, createConfig } from '@viamrobotics/eslint-config';

export default createConfig(
  baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['**/dist/**'],
  }
);
