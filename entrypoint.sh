#!/bin/bash

set -ex

if [ "$1" = 'run' ]; then
    exec npm run dev
else
    echo "Please specify run"
fi
