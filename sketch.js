function setup() {

    // red, blue, yellow, white, black
    const possibleColors = ["#f50f0f", "#0d7fbe", "#fae317", "#f3f3f3", "#000000"];

    // size of each square
    const squareSize = 50;

    // number of cells of the grid
    const cellNumber = 10;

    // canvas size in pixels
    const canvasSize = squareSize * cellNumber

    // set width and height
    const width = squareSize
    const height = squareSize

    noStroke(0);
    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0
    let y = 0

    while (y < canvasSize) {

        x = 0

        while (x < canvasSize) {

            // choose random hex code from array
            const colorCode = random(possibleColors)
            // store chosen object in myColor variable            
            const myColor = color(colorCode)

            // fill all the square with one colour
            fill(myColor)

            // rect(x, y, width, height)
            // x = position of the left of the square
            // y = position of the top of the square
            // s = size of the side of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle
            rect(x, y, width, height)

            // update x

            x = x + width
        }

        // update y 

        y = y + width

    }
}

