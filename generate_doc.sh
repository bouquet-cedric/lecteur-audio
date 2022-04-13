npm i --save-dev jsdoc minami
rm -rf doc && jsdoc -c conf-jsdoc.json  -r . -R .readme_doc.md
