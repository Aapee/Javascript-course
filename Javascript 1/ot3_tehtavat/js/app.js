function onTuplaInputChange() {
    try {
        const luku = document.getElementById('tuplattava_input').value;
        const tuplattu = tuplaa(Number(luku));
        document.getElementById('tuplattu').innerText = 'Luku ' + luku + ' tuplattuna: ' + tuplattu;
    } catch (err) {
        console.log('tuplaa()-funktiota ei ole määritelty');
    }
}

function postinumeroCheck() {
    try {
        const postinumero = document.getElementById('postinumero_input').value;
        const isValid = tarkastaPostinumero(postinumero);
        const result = isValid ? '"' + postinumero + '" on postinumero.' : '"' + postinumero + '" ei ole postinumero.'
        document.getElementById('postinumero_output').innerText = result;
    } catch (err) {
        console.log('tarkastaPostinumero()-funktiota ei ole määritelty');
    }
}

function calculateNumbers(operator) {
    try {
        const luku1 = Number(document.getElementById('luku1_input').value);
        const luku2 = Number(document.getElementById('luku2_input').value);
        const tulos = suoritaLaskutoimitus(luku1, luku2, operator);
        document.getElementById('laskutoimitus_output').innerText = 'Tulos: ' + tulos;
    } catch (err) {
        console.log('Laskutoimitusten laskentaa ei ole toteutettu.');
    }
}
function sum() {
    calculateNumbers('+');
}
function subtract() {
    calculateNumbers('-')
}
function multiply() {
    calculateNumbers('*')
}
function divide() {
    calculateNumbers('/')
}

function updatePersonInfoOn(htmlElement, infoText) {
    htmlElement.innerText = infoText;
}
function updatePersonInfo() {
    const etunimi = document.getElementById('random_etunimi_input').value;
    const sukunimi = document.getElementById('random_sukunimi_input').value;
    const ika = Number(document.getElementById('random_ika_input').value);
    const sukupuoli = document.getElementById('nainen_radio').checked ? 'nainen' : 'mies';
    const ihminen = teeIhminen(etunimi, sukunimi, ika, sukupuoli);
    const infoText = muodostaInfoTeksti(ihminen);
    document.getElementById('muu_henkilo_info').innerText = infoText;
}
try {
    const seppoElem = document.getElementById('seppo_info');
    const seppoInfo = muodostaInfoTeksti(seppo);
    updatePersonInfoOn(seppoElem, seppoInfo);
} catch (err) {
    console.log('Seppoa tai tekstin muodostusta ei ole määritelty.');
}

const kohteet = [];
function kirjoitaKohdeTaulu(kirjoitettavatKohteet) {
    document.getElementById('kohteet_table').innerHTML = kirjoitettavatKohteet.map(x => `
    <tr>
        <td>` + x.kohdenumero + `</td>
        <td>` + x.osoite + `</td>
        <td>` + x.hinta + `</td>
        <td>` + x.pintaala + `</td>
        <td>` + x.neliohinta.toFixed(2) + `</td>
    </tr>`)
    .join('');
}
function lisaaKohde() {
    const kohdenumero = document.getElementById('kohdenumero_input').value;
    const osoite = document.getElementById('osoite_input').value;
    const hinta = Number(document.getElementById('hinta_input').value);
    const pintaala = Number(document.getElementById('pintaala_input').value);
    const kohde = teeKohde(kohdenumero, osoite, hinta, pintaala);
    kohteet.push(kohde);
    kirjoitaKohdeTaulu(kohteet);
    document.getElementById('kohdenumero_input').value = '';
    document.getElementById('osoite_input').value = '';
    document.getElementById('hinta_input').value = '';
    document.getElementById('pintaala_input').value = '';
}
function haeKohdettaTaulusta() {
    const hakuehto = document.getElementById('hakuehto_input').value;
    const haetutKohteet = hakuehto && hakuehto.length > 0 ? kohteet.filter(x => haeKohde(x, hakuehto)) : kohteet;
    kirjoitaKohdeTaulu(haetutKohteet);
}