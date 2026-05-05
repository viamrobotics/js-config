import { baseConfig, defineConfig } from '@viamrobotics/eslint-config';

export default defineConfig(
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
