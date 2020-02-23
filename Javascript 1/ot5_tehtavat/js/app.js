const arvosanat = [];
function lisaaArvosana() {
    const arvosanaElem = document.getElementById('arvosana_input');
    if(arvosanaElem.value === null || arvosanaElem.value === undefined || arvosanaElem.value === '') return;
    const arvosana = Number(arvosanaElem.value);
    arvosanat.push(arvosana);
    document.getElementById('arvosanat_output').innerText = arvosanat.join(', ');
    arvosanaElem.value = '';
    console.log(laskeKeskiarvo(arvosanat));
    document.getElementById('keskiarvo_output').innerText = laskeKeskiarvo(arvosanat).toFixed(2);
}

function throwDice() {
    const getRandomDiceNumber = () => Math.ceil(Math.random() * 6);
    const silmaluku1 = getRandomDiceNumber();
    const silmaluku2 = getRandomDiceNumber();
    const kieli = document.getElementById('suomi_radio').checked ? 'suomi' : 'englanti';
    const noppaTulos = nopanHeitto(silmaluku1, silmaluku2, kieli);
    document.getElementById('dice1').src = 'graphics/dice' + silmaluku1 + '.svg';
    document.getElementById('dice2').src = 'graphics/dice' + silmaluku2 + '.svg';
    document.getElementById('noppatulos').innerText = noppaTulos;
}

const myTwitter = new Twitter();
function updateTwitterView() {
    const hakuehto = document.getElementById('hakuehto_input').value;
    const tweetit = hakuehto ? myTwitter.etsiTweetit(hakuehto) : myTwitter.tweetit;
    document.getElementById('tweetContainer').innerHTML = tweetit.map(x => `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">` + x.otsikko + `</h5>
            <h6 class="card-subtitle mb-2 text-muted">By: ` + x.kayttaja + `</h6>
            <p class="card-text">` + x.teksti + `</p>
        </div>
    </div>
    `);
}
function addTweet() {
    const kayttaja = document.getElementById('kayttajanimi_input').value;
    const otsikko = document.getElementById('otsikko_input').value;
    const teksti = document.getElementById('tweetText').value;
    if(!kayttaja || !otsikko || !teksti) return;
    myTwitter.lisaaTweetti(kayttaja, otsikko, teksti);
    document.getElementById('kayttajanimi_input').value = '';
    document.getElementById('otsikko_input').value = '';
    document.getElementById('tweetText').value = '';
    updateTwitterView();
}
updateTwitterView();

function updatePersonsView() {
    const naytaEtunimi = document.getElementById('nayta_etunimi').checked;
    const naytaSukunimi = document.getElementById('nayta_sukunimi').checked;
    const nimet = haeNimet(naytaEtunimi, naytaSukunimi);
    document.getElementById('nimilista_output').innerText = nimet.join(', ');
}
function addPerson() {
    const etunimiElem = document.getElementById('etunimi_input');
    const sukunimiElem = document.getElementById('sukunimi_input');
    if(!etunimiElem.value || !sukunimiElem.value) return;
    nimilista.push({etunimi: etunimiElem.value, sukunimi: sukunimiElem.value});
    updatePersonsView();
}
updatePersonsView();