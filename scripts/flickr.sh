#!/bin/sh

./scripts/designreact.sh

# =============================================
# Clear build directory
# =============================================

if [ ! -d server ];
then
   { echo "[INFO]   Cannot find server dir, continuing..."; }
else
   rm -rf server
   { echo "[INFO]   Deleted server dir, continuing..."; }
fi

echo "[INFO]   Creating server dir, continuing...";
mkdir server

# =============================================
# Start webpack
# =============================================

webpack --content-base server/ --config webpack.config.flickr.js --progress
cd ./server
node flickr