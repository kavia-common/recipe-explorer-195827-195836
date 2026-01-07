#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-195827-195836/react_js_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

