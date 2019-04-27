'use script';

// Number

let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata);


// String 

let wyplataStr = "5000";
let premiaStr = "2500";

calkowitaWyplata = wyplataStr + premiaStr;

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata);


// Boolean

let czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
}
else
{
    console.log("Nie ma SMOGu");
}


// Undefined

let niezdefiniowanaZmienna;
let nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);

let nazwisko = "Lewandowski";
let imie1 = "Mariusz \"Pudzian\" Pudzianowski";
let imie2 = `Mariusz ${nazwisko}`;

console.log(imie1);
console.log(imie2);

