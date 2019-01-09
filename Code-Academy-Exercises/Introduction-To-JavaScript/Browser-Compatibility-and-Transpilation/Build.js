"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";

/*Use npm run build on the command line to transpile. This runs the build script put in package.json.
Babel writes ES6 code to main.js in the lib folder.*/
