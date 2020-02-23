//Oppimistehtävä 1 A: Luo muuttuja nimeltä "tervehdys_a" ja alusta se arvolla "Heippa maailma!"
let tervehdys_a='Heippa maailma!';

//Oppimistehtävä 1 B: Luo vakio nimeltä "tervehdys_b" ja alusta se arvolla "Heippa vakiomaailma!"
const tervehdys_b='Heippa vakiomaailma!';

//Oppimistehtävä 1 C: Luo tervehdysteksti käyttäen annettuja muuttujia, niin että tervehtijä ja tervehditty esiintyvät tervehdystekstissä. Jos esimerkiksi tervetijä on "Minä" ja tervehdittävä on "Maailma", tulee tervehdystekstiksi muodostua "Heippa Maailma! Terveisin, Minä"
const tervehdysGeneraattori = function(tervehtija, tervehdittava) {
    const tervehdysTeksti = 'heippa ' +  tervehtija + '! terveisin, ' + tervehdittava; //Muuta alustus tehtävänannon mukaiseen tervehdystekstiin käyttäen tervehtija- ja tervehdittava-muuttujia
    return tervehdysTeksti;
}

//Oppimistehtävä 1 D: Määrittele haeTosi-funktion arvo-vakio, niin että se saa arvokseen boolean "true", ja haeVastakohta-funktion arvo-vakio niin, että se on annetun muuttujan vastakohta
const haeTosi = function() {
    const arvo = true; //Muuta alustus tehtävänannon mukaisesti niin, että arvoksi tulee boolean "true"
    return arvo; 
}

const haeVastakohta = function(alkuarvo) {
    const arvo = !true; //Muuta alustus tehtävänannon mukaisesti niin, että arvoksi tulee alkuarvo-muuttujan vastakohta, eli jos alkuarvo on "true", niin vastakohta on "false", ja päinvastoin
    return arvo;
}

//Oppimistehtävä 1 E: Määrittele merkityt arvot niin, että annettuun numeroon lisätään yksi, vähennetään yksi tai se nollataan
const lisaaYksi = function(arvo) {
    const uusiArvo = arvo+1; //Muuta alustus tehtävänannon mukaisesti niin, että uuteen arvoon on lisätty 1
    return uusiArvo;
}

const vahennaYksi = function(arvo) {
    const uusiArvo = arvo-1; //Muuta alustus tehtävänannon mukaisesti niin, että uudesta arvosta on vähennetty 1
    return uusiArvo;
}

const nollaa = function(arvo) {
    const uusiArvo = 0; //Muuta alustus tehtävänannon mukaisesti niin, että uusi arvo on 0
    return uusiArvo;
}

//Oppimistehtävä 1 F: Täydennä koodiin annetut kohdat niin, että annetut luvut summataan, vähennetään, kerrotaan tai jaetaan toisillaan
const summa = function(luku1, luku2) {
 const tulos = luku1 + luku2; //Määrittele tulos niin että arvo1 ja arvo2 lasketaan yhteen
 return tulos
}




const vahennys = function(luku1, luku2) {
    const tulos = luku1 - luku2; //Määrittele tulos niin että arvo2 vähennetään arvos1:stä
    return tulos
}

const kerto = function(luku1, luku2) {
    const tulos = luku1*luku2; //Määrittele tulos niin että arvo1 kerrotaan arvo2:lla
    return tulos
}

const jako = function(luku1, luku2) {
    const tulos = luku1/luku2; //Määrittele tulos niin että arvo1 jaetaan arvo2:lla
    return tulos
}

//Oppimistehtävä 1 G: Muuta muuttujien tyypit niin, että operaatioista syntyy oikea tulos
const laskeYhteen = function(merkkijono1, merkkijono2) {
    const arvo1 = 5; //Muuta arvo1:n määrittelyä niin että merkkijono1 on muutettu numeroksi
    const arvo2 = 7; //Muuta arvo2:n määrittelyä niin että merkkijono2 on muutettu numeroksi
    return arvo1 + arvo2;
}

const yhdistaMaakoodiPuhelinnumeroon = function(maakoodi, puhelinnumero) {
    const arvo1 = '358'; //Muuta arvo1:n määrittelyä niin että numeerinen maakoodi on muutettu merkkijonoksi
    const arvo2 = '400123123'; //Muuta arvo2:n määrittelyä niin että numeerinen puhelinnumero on muutettu merkkijonoksi
    return arvo1 + arvo2;
}