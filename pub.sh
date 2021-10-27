!/bin/sh
# Author : Janith Yapa
# Copyright (c) janithcyapa.com
# Script follows here: 

c1=`tput setaf 1` # COLOR_RED
c2=`tput setaf 2` # COLOR_GREEN
c3=`tput setaf 3` # COLOR_YELLOW
c4=`tput setaf 4` # COLOR_BLUE
c5=`tput setaf 5` # COLOR_MAGENTA
c6=`tput setaf 6` # COLOR_CYAN
c7=`tput setaf 7` #  COLOR_WHITE
c0=`tput sgr0` # COLOR_BLACK
# echo "${c1}text${c0}"
# echo "${c2}text${c0}"
# echo "${c3}text${c0}"
# echo "${c4}text${c0}"
# echo "${c5}text${c0}"
# echo "${c6}text${c0}"
# echo "${c7}text${c0}"

timeStart="$(date +'%s')"

echo "${c7}NPM Package Publish Script${c0}"
echo "${c6}Initializing...${c0}"
echo ""

git add .
git commit -m "refactor: processing publish"
echo ""


echo "current version v$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' ./package.json)"
echo "${c4}New version? ${c0}"
echo "ex: <newversion> | major | minor | patch "
read VERSION
echo ""

echo "${c6}Building Package${c0}"
rollup -c
echo ""
echo "${c6}Updating Package Verion $VERSION ${c0}"
npm version $VERSION
echo ""
echo "${c6}Publishing Package${c0}"
npm publish
echo ""
echo "${c2}PACKAGE PUBLISH SUCCESSFULL${c0}"
echo ""

echo "${c6}Finalizing...${c0}"
git add .
git commit -m "build: publish v$VERSION"
git push
git pull

timeEnd="$(date +'%s')"
duration="$(($timeEnd - $timeStart))" 
duM="$(($duration/60))"
duS="$(($duration%60))"
echo "${c2}Process complete${c0}"
echo "$duM minutes and $duS seconds elapsed."


echo ""
echo "${c1}exit${c0}"



