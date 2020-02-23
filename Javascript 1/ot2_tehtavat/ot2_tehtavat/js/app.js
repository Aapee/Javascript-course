function laskeAlennus() {
    const loppusumma = Number(document.getElementById('loppusumma_input').value);
    const alennus = alennusLaskuri(loppusumma);

    document.getElementById('loppusumma').innerText =  loppusumma.toFixed(2) + ' €';
    document.getElementById('alennus').innerText =  alennus[0].toFixed(2) + ' €';
    document.getElementById('maksettava').innerText =  alennus[1].toFixed(2) + ' €';
}

function throwDice() {
    const getRandomDiceNumber = () => Math.ceil(Math.random() * 6);
    const silmaluku1 = getRandomDiceNumber();
    const silmaluku2 = getRandomDiceNumber();
    const noppaTulos = nopanHeitto(silmaluku1, silmaluku2);
    document.getElementById('dice1').src = 'graphics/dice' + silmaluku1 + '.svg';
    document.getElementById('dice2').src = 'graphics/dice' + silmaluku2 + '.svg';
    document.getElementById('noppatulos').innerText = noppaTulos;
}

function printName() {
    const nimi = document.getElementById('nimi_input').value;
    const kertaa = Number(document.getElementById('nimi_kertaa_input').value);
    const tuloste = nimenTulostus(nimi, kertaa);
    console.log('tuloste', tuloste);
    document.getElementById('nimen_tulostus').innerText = tuloste;
}

function buyTicket() {
    const luokka2Checked = document.getElementById('luokka2_radio').checked;
    const menopaluuChecked = document.getElementById('twoway_radio').checked;
    const alennus = document.getElementById('alennus_lippu').checked;
    const maara = document.getElementById('lippuja_maara').value;
    const kokonaishinta = laskeLippujenHinta(luokka2Checked, menopaluuChecked, alennus, maara);
    document.getElementById('lippu_kokonaishinta').innerText = kokonaishinta.toFixed(2) + ' €';
}