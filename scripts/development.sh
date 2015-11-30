#!/bin/sh

./scripts/designreact.sh

# =============================================
# Clear build directory
# =============================================

if [ ! -d build ];
then
   { echo "[INFO]   Cannot find build dir, continuing..."; }
else
   rm -rf build
   { echo "[INFO]   Deleted build dir, continuing..."; }
fi

echo "[INFO]   Creating build dir, continuing...";
mkdir build

echo "[INFO]   Copying index.html, continuing...";
cp ./src/client/index.html ./build

echo "[INFO]   Sync static files, continuing...";
rsync -r ./src/static/ ./build

# =============================================
# Start webpack
# =============================================
open -a "/Applications/Google Chrome.app" http://localhost:8080

command -v webpack-dev-server >/dev/null 2>&1 || { echo >&2 "[ERROR]   webpack-dev-server required but not installed. Aborting."; exit 1; }
webpack-dev-server --content-base build/ --config webpack.config.development.js --progress --hot