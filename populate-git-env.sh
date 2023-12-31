# List of environment variables that are automatically populated, if not already set.
# Those variables are populated this way so that deploying locally and working locally behave identically to staging and production.

# XXX To print those variables for testing purpose, use: `pnpm script:populate-git-env:print`

export "GIT_COMMIT_SHA=${GIT_COMMIT_SHA:-$(pnpm --silent git:getCommitSHA)}"
export "GIT_COMMIT_REF=${GIT_COMMIT_REF:-$(pnpm --silent git:getCommitRef)}"
export "GIT_COMMIT_TAGS=${GIT_COMMIT_TAGS:-$(pnpm --silent git:getReleasesAndTags)}"
