function changeColor(selector, color) {
    const el = document.querySelector(selector);
    if (el.style.backgroundColor === color) {
        el.style.backgroundColor = 'white';  // 'white' should be a string
    } else {
        el.style.backgroundColor = color;
    }
}

function reset() {
    document.getElementsByClassName('my-section').style.backgroundColor = "transparent";
}