#!/bin/bash

tag=$(git tag --contains HEAD)

if [[ $tag == "latest" ]]; then
    echo "Deploying to production";
    exit 1;
else
    echo "Skipping deployment because the commit is not tagged with 'latest'";
    exit 0;
fi
