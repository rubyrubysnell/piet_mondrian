// empty array of textures

const textures = []; 

function preload(){

// loop through the saved textures

    for(let textureNumber = 1; textureNumber <= 4; textureNumber++){

        // get the path of the current texture

        const pathToTexture = 'Textures/texture-trans' + textureNumber + '.png';

        // load the image using the loadImage p5.js function and add it to the textures list

        textures.push(loadImage(pathToTexture));
    }
}

function setup() {
    
    // size of each square
    const squareSize = 50;

    // number of cells of the grid
    const cellNumber = 10;

    // canvas size in pixels
    const canvasSize = squareSize * cellNumber

    // maximum offset
    const maxOffset = 2;
    const maxOffsetSize = 5
    
    noStroke(0);
    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row = 0; row < cellNumber; row++){
        for(let column = 0; column < cellNumber; column++){
            const red = random(255);
            const green = random(255);
            const blue = random(255);

            const myColor = color(red, green, blue);

            // get a random texture
            const texture = random(textures);

            // fill all the square with one colour
            // fill(myColor)

            // tint the square
            tint(myColor)

            // calculate random offset for position
            const randomOffsetHorizontal = random(-maxOffset, maxOffset)
            const randomOffsetVertical = random(-maxOffset, maxOffset)

            // calculate horizontal and vertical positions in pixels
            const x = (row * squareSize) + randomOffsetHorizontal
            const y = (column * squareSize) + randomOffsetVertical

            // calculate random offset for size
            const randomOffsetWidth = random(-maxOffsetSize, maxOffsetSize)
            const randomOffsetHeight = random(-maxOffsetSize, maxOffsetSize)

            // set width and height
            const width = squareSize + randomOffsetWidth
            const height = squareSize + randomOffsetHeight

            // image(background, x position, y position, width, height)
            image(texture, x, y, width, height)

            // square(x, y, s)
            // x = position of the left of the square
            // y = position of the top of the square
            // s = size of the side of the square

            // square(x, y, squareSize)
        }
    }
}