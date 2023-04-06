#!/bin/bash

set -eo pipefail

# get the name of a package as specified in its package.json
function get_name () {
  package=${1}

  echo $(jq -r ".name" < "${package}/package.json")
}

# get the version of a package as specified in its package.json
function get_local_version () {
  package=${1}

  echo $(jq -r ".version" < "${package}/package.json")
}

# get the latest published version of a package in the npm registry
function get_published_versions () {
  package=${1}
  name=${2}

  published_meta=$(npm --workspace="${package}" info --json 2>/dev/null ||:)
  publish_meta_error=$(echo "${published_meta}" | jq -r ".error.code")

  if [[ "${publish_meta_error}" == "null" ]]; then
    published_versions=$(echo "${published_meta}" | jq -r ".[\"${name}\"].versions[]")

  elif [[ "${publish_meta_error}" == "E404" ]]; then
    published_versions=""

  else
    echo "Unable to read registry for ${package}: ${publish_meta_error}" >&2
    echo "${published_meta}" >&2
    exit 1
  fi

  echo "${published_versions}"
}


function publish_package () {
  package=${1}

  name=$(get_name "${package}")
  local_version=$(get_local_version "${package}")
  published_versions=$(get_published_versions "${package}" "${name}")
  tag="${name}@${local_version}"

  if [[ "${published_versions}" == *"${local_version}"* ]]; then
    echo "${tag} is already published"
  else
    echo "Publishing ${tag}"
    npm --workspace "${package}" publish
    git tag -a "${tag}" -m "${tag}"
  fi
}

# get a space-separated list of all workspace
workspaces=$(jq -r ".workspaces[]" < package.json)

# compare the local and published version of each package, and publish if needed
for package in ${workspaces}; do
  publish_package "${package}"
done
