# publish all unpublished versions in the workspace
pnpm publish --recursive --report-summary

# read published packages
tags=$(jq -r ".publishedPackages[] | .name + \"@\" + .version" < pnpm-publish-summary.json)

# add a tag for each released version
for tag in ${tags}; do
  git tag -a "${tag}" -m "${tag}"
done

# push tags
for tag in ${tags}; do
  git push origin "${tag}"
done
