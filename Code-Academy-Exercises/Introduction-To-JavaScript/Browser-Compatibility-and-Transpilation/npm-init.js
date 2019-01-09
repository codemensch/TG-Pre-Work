var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/*To use Babel to transpile ES6, first we have to setup a project file called project.json.
The project file needs to reside along side the src folder which contains our JavaScript
program, main.js. package.json contains meta data, a list of required node packages,
and key-value pairs for command line scripts. npm init installs package.json.*/
