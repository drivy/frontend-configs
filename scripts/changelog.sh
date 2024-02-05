#!/bin/bash
set -e

dir_path=$(dirname $0)
packages_path="$dir_path/../packages"

compute_changelog()
{
  initial_path=$(pwd)
  # Remove the @getaround-eu/ prefix, since the folder name doesn't have it
  cd "$packages_path/${1/@getaround-eu\//}"

  # Package release and tag is using the format `package_name@version`
  npm_version=$(node -pe "require('./package.json').version")
  npm_package_name=$(node -pe "require('./package.json').name")
  final_version="$npm_package_name@$npm_version"

  pnpm auto-changelog \
    --latest-version $final_version \
    --commit-limit false \
    --backfill-limit false \
    --hide-credit \
    --ignore-commit-pattern ".*Release configs.*|.*Bump auto-changelog.*" \
    --breaking-pattern "\[breaking\]" \
    --tag-pattern "$npm_package_name@.+" \
    --tag-prefix "$npm_package_name@" \
    --append-git-log "-- ./"

  git add CHANGELOG.md

  cd $initial_path
}

# We write changelogs only for the packages that have changed since the last release
changed_packages=$(pnpm lerna changed) || (printf "\n%s\n\n" "No changed package(s) found." && exit 1)
for p in $changed_packages; do
  compute_changelog $p
done
