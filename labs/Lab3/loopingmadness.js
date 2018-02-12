var processInput = function(numOfRows, numOfCols) {
    if(numOfRows < 1) {
	throw "Cannot process less than 1 row.";
    }

    createTriangle(numOfRows);
    createSquare(numOfRows);
    createEmptyRectangle(numOfRows, numOfCols);
};

// Here, you can change the number inside the parameter
processInput(7, 7);


// TODO
/* Your job is to fill in this function. It should draw 
 * a triangle. If you gave an input of 5, this is what
 * the result should look like:
 *        *
 *        **
 *        ***
 *        ****
 *        *****
 *
 * It SHOULD BE a right-angle isoceles triangle. */
var createTriangle = function(length) {

};


// TODO
/* Your next job is to fill in the next function.
 * It should draw a square (that means that the
 * width and the height should be the same!).
 * If you gave an input of 3, this is what it should
 * look like:
 *         ***
 *         ***
 *         ***
 *
 * This is a square. */
var createSquare = function(length) {

};


// TODO
/* Your final task in this file is to fill in the
 * last function. It should draw an empty rectangle
 * based on your input. For example, an input of
 * length=5 and height=4 should give this result:
 *         *****
 *         *   *
 *         *   *
 *         *****
 *
 * Notice that the middle portion of the rectangle
 * is empty.*/
var createEmptyRectangle = function(length, height) {

};


// BONUS (Do this after you finish all other tasks
// listed above! This will net you bonus marks!)
/* You can create a few functions that can allow you to draw
 * other shapes as well! Bonus marks for creativity,
 * and you get even more marks if you can do it RECURSIVELY.
 * (Search on Google on how to write programs recursively!) */
