/**
 * it is better to use the keyword
 * let
 * const
 * to avoid problems about variables
 */

// "undefined"
console.log(aVar);

// "Error aLet doesn't exist"
// stop everything
console.log(aLet);

// "Error aConst doesn't exist"
// stop everything
console.log(aConst);

// yes it is
if (1 == "1") {
    var aVar = "aVar";
    let aLet = "aLet";
    const aConst = "aConst";

    aVar = "varA";
    aLet = "letA";
    // doesn't work const change value
    // stop everything
    aConst = "constA";

    // "varA"
    console.log(aVar);

    // "letA"
    console.log(aLet);

    // "aConst"
    console.log(aConst);
}

// "varA"
console.log(aVar);

// "Error aLet doesn't exist"
// stop everything
console.log(aLet);

// "Error aConst doesn't exist"
// stop everything
console.log(aConst);
