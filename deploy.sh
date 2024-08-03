#!/bin/bash

# PRODUCTION
git reset --hard
git checkout origin master
<<<<<<< HEAD
git pull origin master

docker compose up -d 
=======
git pull origin master
>>>>>>> origin/master
