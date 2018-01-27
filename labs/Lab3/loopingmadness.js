var processInput = function(numOfRows) {
    if(numOfRows < 1) {
	throw "Cannot process less than 1 row.";
    }

    createRectangle(numOfRows);
    createTriangle(numOfRows);
    createEmptyRectangle(numOfRows);
    createEmptyTriangle(numOfRows);
};

