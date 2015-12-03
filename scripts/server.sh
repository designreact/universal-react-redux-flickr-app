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
else
   rm ./server/server.js
   { echo "[INFO]   Deleted server dir, continuing..."; }
fi

if [ ! -d ./server/node_modules ];
then
   echo "[INFO]   Sync static files, continuing...";
   rsync -rtvpl ./node_modules ./server/
fi

# =============================================
# Start webpack
# =============================================

webpack --content-base server/ --config webpack.config.server.js --progress
cd ./server

node server