// import the exports from exports.js
// ./exports is the relative path to exports.js
import {hi, basicExport} from './exports';

// import the default export of exports.js with the name we want
import theAnswer from './exports'

// Hello World
console.log(hi + " " + basicExport);

// The answer is 42
console.log("The answer is " + theAnswer);
