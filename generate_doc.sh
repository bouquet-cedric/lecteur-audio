#!/bin/bash

alias getUseful="npm i --save-dev jsdoc minami"
if [ -d "node_modules" -a ! -d "node_modules/minami" -a ! -d "node_modules/jsdoc" ];then
    getUseful;
fi
if [ ! -d "node_modules" ];then
    getUseful;
fi
echo -en "Documentation [en cours] \u2753"
rm -rf doc && jsdoc -c conf-jsdoc.json  -r . -R .readme_doc.md
echo -ne "\rDocumentation [done] \033[01;32m\u2757\033[00m            \b\b\b\b\b\b\b\b\b\b\b\b"
sleep 0.5
echo -e "\rDocumentation effectuée \033[01;32m\u2714\033[00m"
