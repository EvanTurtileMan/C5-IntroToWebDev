var anObject = {};

anObject.foo = 8;
anObject.bar = 10;
anObject.str = "This is a biggggggggg stringgggggggggg."

anObject.aFunction = function(a, b) {
    var addStuff = a + b;
    return addStuff;
}
console.log(anObject);

console.log(anObject.aFunction(7, 2));
console.log(anObject.aFunction("This is an ", "apple"));