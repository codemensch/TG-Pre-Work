{
  "name": "learn-javascript-transpilation-bct-npm-init",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }

}

/*Lastly we need to initiate the transpilation from ES6 to ES5 by including a
script in package.json. We add a "build" property to the scripts object. Build will contain
a command line method  that contains the several arguments: babel (transpiles code),
src (transpiles all code in src directory), -d (transpiles code to a directory),
the directorys is called lib.*/
