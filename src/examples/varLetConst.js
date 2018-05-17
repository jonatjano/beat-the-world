/**
 * it is better to use the keyword
 * let
 * const
 * to avoid problems about variables
 */

// "undefined"
console.log(aVar);

// "Error: can't access lexical declaration `aLet' before initialization"
// stop everything
console.log(aLet);

// "Error: can't access lexical declaration `aConst' before initialization"
// stop everything
console.log(aConst);

var aVar = "var";
let aLet = "let";
const aConst = "const";

// "var"
console.log(aVar);

// "let"
console.log(aLet);

// "const"
console.log(aConst);


// yes it is
if (1 == "1") {
    // "varA"
    console.log(aVar);

    // "Error: can't access lexical declaration `aLet' before initialization"
    // stop everything
    console.log(aLet);

    // "Error: can't access lexical declaration `aConst' before initialization"
    // stop everything
    console.log(aConst);
 
    var aVar = "aVar";
    let aLet = "aLet";
    const aConst = "aConst";

    aVar = "varA";
    aLet = "letA";
    // "Error: invalid assignment to const `aConst'"
    // doesn't work const can't change value
    // stop everything
    aConst = "constA";

    // "varA"
    console.log(aVar);

    // "letA"
    console.log(aLet);

    // "aConst"
    console.log(aConst);
}

// they are not of the same type so this is true
if(1 !== "1") {
    // here they are available since you don't redefine them inside the if block
    
    // "let"
    console.log(aLet);

    // "const"
    console.log(aConst);
}

// "varA"
console.log(aVar);

// "let"
// get back to value before if*
console.log(aLet);

// "const"
// get back to value before if*
console.log(aConst);

// *that's why var must be avoided unless your case specifically need it
