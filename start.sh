#!/usr/bin/env bash
echo "Starting api"
NODE_ENV=production pm2 start server.js -- --port 3010 --name "StoryMakerApi" 
