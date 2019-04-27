'use script';

let konto1 = 10000;

const zrobZakupy = (zaIle) => {
    let konto2 = 25000;

    let ilezostaloNaKoncie = konto1 - zaIle;

    return ilezostaloNaKoncie;
}

console.log(konto1);

console.log(zrobZakupy(4000));

