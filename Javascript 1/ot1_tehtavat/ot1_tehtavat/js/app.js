//Opetustehtävä 1 A:n kontrollirakenne
try {
    const title_a = document.getElementById('ot1a');
    tervehdys_a += ' Terveisin Minä'
    title_a.innerText = tervehdys_a;
} catch(err) {

}

//Opetustehtävä 1 B:n kontrollirakenne
const title_b = document.getElementById('ot1b');
try {
    if(typeof tervehdys_b !== 'undefined') {
        tervehdys_b = 'Tervehdys ei ole vakio';
        title_b.innerText = tervehdys_b;
    }
} catch (err) {
    title_b.innerText = tervehdys_b;
}

//Opetustehtävä 1 C:n kontrollirakenne
function onTervehdysInputChange() {
    const tervehtija = document.getElementById('tervehtija_input').value;
    const tervehdittava = document.getElementById('tervehdittava_input').value;
    const title_c = document.getElementById('ot1c');
    const tervehdysText = tervehdysGeneraattori(tervehtija, tervehdittava);
    title_c.innerText = tervehdysText;
}

//Opetustehtävä 1 D:n kontrollirakenne
const tosiArvo = haeTosi();
const vastakohtaArvo = haeVastakohta(tosiArvo);
const trueText = document.getElementById('ot1dtrue');
const negationText = document.getElementById('ot1dnegation');
trueText.innerText = 'Haettu tosi on: ' + (typeof tosiArvo) + ' ' + tosiArvo;
negationText.innerText = 'Ja sen vastakohta: ' + (typeof vastakohtaArvo) + ' ' + vastakohtaArvo;

//Opetustehtävä 1 E:n kontrollirakenne
let displayNumber = 0;
const setNumber = function(val) {
    displayNumber = val;
    const number = document.getElementById('ot1e');
    number.innerText = val;
}
function increaseNumber() {
    setNumber(lisaaYksi(displayNumber));
}
function decreaseNumber() {
    setNumber(vahennaYksi(displayNumber));
}
function resetNumber() {
    setNumber(nollaa(displayNumber));
}

//Opetustehtävä 1 F:n kontrollirakenne
const num1Elem = document.getElementById('luku1_input');
const num2Elem = document.getElementById('luku2_input');
const calculateFunction = function(number1, number2, operator, result) {
    const title_f = document.getElementById('ot1f');
    title_f.innerText = 'Tulos: ' + number1 + ' ' + operator + ' ' + number2 + ' = ' + result;
}
function sum() {
    const num1 = Number(num1Elem.value);
    const num2 = Number(num2Elem.value);
    calculateFunction(num1, num2, '+', summa(num1, num2))
}
function subtract() {
    const num1 = Number(num1Elem.value);
    const num2 = Number(num2Elem.value);
    calculateFunction(num1, num2, '-', vahennys(num1, num2))
}
function multiply() {
    const num1 = Number(num1Elem.value);
    const num2 = Number(num2Elem.value);
    calculateFunction(num1, num2, 'x', kerto(num1, num2))
}
function divide() {
    const num1 = Number(num1Elem.value);
    const num2 = Number(num2Elem.value);
    calculateFunction(num1, num2, '/', jako(num1, num2))
}

//Opetustehtävä 1 G:n kontrollirakenne
const ot1gLasku = document.getElementById('ot1glasku');
const ot1gLaskuTulos = laskeYhteen('5', '7');
ot1gLasku.innerText = 'Lasku: 5 + 7 = ' + ot1gLaskuTulos;
const ot1gPuhelinnumero = document.getElementById('ot1gpuhelinnumero');
const ot1gPuhelinnumeroTulos = yhdistaMaakoodiPuhelinnumeroon(358, 400123123);
ot1gPuhelinnumero.innerText = 'Maakoodi 358 ja puhelinnumero 400123123 yhdistettynä on ' + ot1gPuhelinnumeroTulos;
