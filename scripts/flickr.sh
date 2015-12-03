#!/bin/sh

./scripts/designreact.sh

# =============================================
# Clear build directory
# =============================================

if [ ! -d server ];
then
   {
      echo "[INFO]   Cannot find server dir, continuing...";
      echo "[INFO]   Creating server dir, continuing...";
      mkdir server
   }
fi

# =============================================
# Start webpack
# =============================================

webpack --content-base server/ --config webpack.config.flickr.js --progress
cd ./server
node flickr