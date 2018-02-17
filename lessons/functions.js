function starter() {
    return "hi";
}

console.log(starter());

var aFunction = function(startVal, endVal) {
    var a = startVal;
    var b = endVal;
    var swap = a;
    a = b;
    b = swap;
    return (a + b) * swap;
};

console.log(aFunction(8, 8));