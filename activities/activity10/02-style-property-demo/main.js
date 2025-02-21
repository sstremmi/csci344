function changeColor(selector, color) {
    const el = document.querySelector(selector);
    if (el.style.backgroundColor === color) {
        el.style.backgroundColor = 'white';  // 'white' should be a string
    } else {
        el.style.backgroundColor = color;
    }
}

function reset() {
    const all = document.querySelectorAll('.my-section');
    all.forEach((el) => {
        el.style.backgroundColor = '';  // Use empty string to reset the background color
    });
    console.log('reset');
}