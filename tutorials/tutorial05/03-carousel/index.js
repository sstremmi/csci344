let currentPosition = 0; // sets current position to 0
let gap = 10; // sets gap between slides to 10 pixels 
const slideWidth = 400; // makes the slide width 400 pixels

function moveCarousel(direction) { // create + name function with direction argument determining whether the carousel moves forward or backward
    const items = document.querySelectorAll(".carousel-item"); // selects the class of "carousel-item"

    if (direction == "forward") { // checks if the direction is forward
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) { // checks if you're already at the second to last slide and it prevents moving forward any further by returning false
            return false;
        }
        currentPosition++; // if not second to last slide, moves forward by 1 position
    } else { // checks if position is NOT forward, meaning it is backwards
        if (currentPosition == 0) { // checks if current positions is 0, meaning it is on the first slide and prevents it from moving backwards if so
            return false; 
        }
        currentPosition--; // if not on the first slide, moves backward by 1 position
    }

    const offset = (slideWidth + gap) * currentPosition; // calculates the horizontal distance to move the carousel based on the currentPosition. The offset is the width of a slide plus the gap, multiplied by the current position to  determine how far to shift the slides

    for (const item of items) {  // Loops through each carousel item and applies a transform style to move the items by the calculated offset
        item.style.transform = `translateX(-${offset}px)`;
    }
}
