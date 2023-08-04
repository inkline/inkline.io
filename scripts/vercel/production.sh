#!/bin/bash

# Retrieve tag name
tag=$(git tag)

if [[ $tag == "latest" ]]; then
    # Deploy to production
    exit 1;
else
    # Skip deployment because the commit is not tagged with 'latest'
    exit 0;
fi
