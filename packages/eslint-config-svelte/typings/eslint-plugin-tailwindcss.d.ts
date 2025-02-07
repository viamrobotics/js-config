declare module 'eslint-plugin-tailwindcss' {
  import type { Linter } from 'eslint';

  const rules: Linter.RulesRecord;
  const configs: { 'flat/recommended': Linter.Config };

  export default { rules, configs };
}
