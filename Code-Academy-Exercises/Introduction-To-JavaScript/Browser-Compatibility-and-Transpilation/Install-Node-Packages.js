var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/*After initializing package.jsom, we need to install to npm packages. The babel-cli
package has command line Babel tools and babel-preset-env does the mapping of ES6
to ES5. We use npm install PACKAGE to install packages. By adding -D to the command,
each package is added to a property of package.json, allowing other developers to run the project
without having to install the packages individually.*/
