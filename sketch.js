function setup() {

    // red, blue, yellow, white, black
    const possibleColors = ["#f50f0f", "#0d7fbe", "#fae317", "#f3f3f3", "#000000"];

    // size of each square
    const squareSize = 50;

    // canvas size in pixels
    const canvasSize = 800

    // list of possible cell sizes based on square size 
    const possibleCellSizes = [squareSize, 2 * squareSize, 3 * squareSize]

    // set width and height
    const width = squareSize
    const height = squareSize

    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0
    let y = 0

    while (y < canvasSize) {

        x = 0

        // generate a random height from the possible cell sizes
        const actualHeight = random(possibleCellSizes)

        while (x < canvasSize) {

            // choose random hex code from array
            const colorCode = random(possibleColors)
            // store chosen object in myColor variable            
            const myColor = color(colorCode)

            // fill all the square with one colour
            fill(myColor)

            // generate a random width from the possible cell sizes
            const actualWidth = random(possibleCellSizes)

            // rect(x, y, width, height)
            // x = position of the left of the square
            // y = position of the top of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle
            rect(x, y, actualWidth, actualHeight)

            // update x

            x = x + actualWidth
        }

        // update y 

        y = y + actualHeight

    }
}

