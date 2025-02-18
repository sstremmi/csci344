let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    // draw5CirclesWhile();
    // draw5CirclesFor();
    // draw5RedSquares();
    // drawNCircles(5);
    // drawNCirclesFlexible(30, 25, 400, 0);
    // drawNCirclesFlexible(4, 100, 100, 200);
    // drawNCirclesFlexible(8, 50, 700, 100);
    // drawNShapesFlexible(30, 30, 335, 0, "square");
    // drawNShapesFlexible(4, 100, 120, 200, "circle");
    // drawNShapesFlexible(8, 50, 725, 25, "square");
    drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");


    drawGrid(canvasWidth, canvasHeight);
}

// function draw5CirclesWhile() {
//     noFill();
//     // fill('red');
//     let x = 100;
//     let y = 200;
//     let d = 50;

//     let i = 0;
//     while (i < 5) {
//         circle(x,y + i * 50,d);
//         i++;
//     }
// }

// function draw5CirclesFor() {
//     let x = 100;
//     let y = 100;
//     let d = 50;

//     for (let i = 0; i < 5; i++) { 
//         circle(x, y + i * 50, d);
//     }
// }

// function drawNCircles(n) {
//     let x = random(50, width - 50); 
//     let y = 50; 
//     let d = 40; 

//     for (let i = 0; i < n; i++) {
//         circle(x, y + i * d, d); 
//     }
// }

// function drawNCirclesFlexible(n, size, x, y) {
//     for (let i = 0; i < n; i++) {
//         circle(x, y + i * size, size);
//     }
// }

// function drawNShapesFlexible(n, size, x, y, shape) {
//     fill('red');
    
//     for (let i = 0; i < n; i++) {
//         if (shape === "circle") {
//             circle(x, y + i * size, size);
//         }
//         else if (shape === "square") {
//             square(x, y +i * size, size);
//         }
//         else {
//             console.log('error');
//         }
//     }
// }
    // circle(100, 200, 50); // centerX, centerY, radius
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction){
    fill('red');

    for (let i = 0; i < n; i++) {
        if (shape === 'circle') {
            if (direction === 'row'){
                circle(x + i * size, y, size);
            }
            else{
                circle(x, y +i * size, size);
            }
        }
        else{
            if (direction === 'row'){
                square(x + i * size, y, size);
            }
            else{
                square(x, y + i * size, size);
            }
        }
    }
}


// function draw5RedSquares() {
//     fill("red");
//     square(320, 200, 50); // topLeftX, topLeftY, width
//     square(320, 250, 50);
//     square(320, 300, 50);
//     square(320, 350, 50);
//     square(320, 400, 50);
// }

