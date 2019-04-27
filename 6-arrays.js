'use strict';

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Adam');



imiona.pop();


console.log(imiona.unshift('Robert'));

console.log(imiona.shift());


let imionaStr = imiona.join(", ");
console.log(imionaStr);

imiona.reverse();

console.log(imiona);

imiona.unshift('Zenek');

imiona.sort();

console.log(imiona);