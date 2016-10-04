#!/usr/bin/env bash
GIT_DEPLOY_REPO="git@github.com:osrtss/osrtss.github.io.git"

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "${GIT_DEPLOY_REPO}" master
