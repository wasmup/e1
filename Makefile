all:
	tslint -c tslint.json app/*.ts
	tsc
	npm start

init:
	npm init
	tsc --init
	tslint --init
	npm i -D electron@latest
	git init