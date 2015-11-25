#!/bin/sh

./scripts/designreact.sh

# =============================================
# Clear build directory
# =============================================

if [ ! -d dist ];
then
   { echo "[INFO]   Cannot find dist dir, continuing..."; }
else
   rm -rf dist
   { echo "[INFO]   Deleted dist dir, continuing..."; }
fi

echo "[INFO]   Creating dist dir, continuing...";
mkdir dist

echo "[INFO]   Copying index.html, continuing...";
cp ./src/client/index.html ./dist

# =============================================
# Start webpack
# =============================================
command -v webpack >/dev/null 2>&1 || { echo >&2 "[ERROR]   webpack required but not installed. Aborting."; exit 1; }
webpack --config build.webpack.js --progress -p