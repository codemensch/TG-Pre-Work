var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/*We can manually convert ES6 syntax to ES5, but this becomes quickly unreasonable
as the program gets larger. Babel was developed to programmatically convert ES6
to ES5. Babel is a transpiler which is an applcation that converts one programming language into
another.*/
