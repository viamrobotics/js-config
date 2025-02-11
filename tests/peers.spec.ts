import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { describe, expect, it } from 'vitest';
import semver from 'semver';

interface PackageJSON {
  peerDependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

const repo = path.join(url.fileURLToPath(import.meta.url), '../..');
const packages = [
  'eslint-config',
  'eslint-config-svelte',
  'prettier-config',
  'prettier-config-svelte',
  'typescript-config',
];

const getManifest = (pkgPath: string) =>
  JSON.parse(
    fs.readFileSync(path.join(repo, pkgPath, 'package.json'), 'utf8')
  ) as PackageJSON;

describe('peer dependency specifications', () => {
  const { devDependencies } = getManifest('');

  describe.each(packages)('%s', (packageName) => {
    const { peerDependencies } = getManifest(
      path.join('packages', packageName)
    );
    const cases = Object.entries(peerDependencies).map(
      ([dependencyName, peerRange]) => ({ dependencyName, peerRange })
    );

    it.each(cases)('$dependencyName', ({ dependencyName, peerRange }) => {
      const devVersion = devDependencies[dependencyName];

      expect(devVersion).toBeDefined();
      expect(
        semver.subset(devVersion!, peerRange),
        `"${devVersion!}" not within "${peerRange}"`
      ).toBe(true);
    });
  });
});
