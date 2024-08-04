#!/bin/bash

# PRODUCTION
git reset --hard
<<<<<<< HEAD
git checkout origin master
git pull origin master

docker compose up -d
=======
git checkout master
git pull origin master

docker compose up -d 
>>>>>>> develop
