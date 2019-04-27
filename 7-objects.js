'use strict';


/* let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(kaja.imie)
    }
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja);
console.log(krystian.wzrost);
console.log(krystian['wzrost']);

kaja.wzrost = 168;
console.log(kaja); */

let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "złoto"
}

let monetaEu = {
    promien: 10,
    nominal: 100,
    waga: 30,
    material: "złoto"
}

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }

    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" +
                 "Nazwisko: " + this.nazwisko + "\n" +
                 "Wzrost: " + this.wzrost + "\n" +
                 "Oczy: " + this.oczy + "\n");
    }
}


let konrad = new Osoba('Konrad', 'Gol', 180, 'niebieskie');
console.log(konrad);
andrzej.wyswietlInfo();