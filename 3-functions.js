'use strict';

const PI = 3.14;

// ES5
function poleKola(r) {
    let poleKola = PI * r * r;

    console.log(poleKola);
}

// ES6
const poleKola = (r) => {
    let poleKola = PI * r * r;

    console.log(poleKola);
}

poleKola(25);