const kohteet = [];
function kirjoitaKohdeTaulu(kirjoitettavatKohteet) {
    document.getElementById('kohteet_table').innerHTML = kirjoitettavatKohteet.map((x, i) => `
    <tr>
        <td>` + x.kohdenumero + (x.updated ? ' (Päivitetty)' : '') + `</td>
        <td>` + x.osoite + `</td>
        <td><input type="number" id="kohde_` + i + `" value="` + x.hinta + `"> <button onclick="paivitaKohde(` + i + `)" type="button" class="btn btn-sm btn-outline-primary">Päivitä</button></td>
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
    const kohde = new Kohde(kohdenumero, osoite, hinta, pintaala);
    kohteet.push(kohde);
    kirjoitaKohdeTaulu(kohteet);
    document.getElementById('kohdenumero_input').value = '';
    document.getElementById('osoite_input').value = '';
    document.getElementById('hinta_input').value = '';
    document.getElementById('pintaala_input').value = '';
}
function haeKohdettaTaulusta() {
    const hakuehto = document.getElementById('hakuehto_input').value;
    const haetutKohteet = hakuehto && hakuehto.length > 0 ? kohteet.filter(x => x.haeKohde(hakuehto)) : kohteet;
    kirjoitaKohdeTaulu(haetutKohteet);
}
function paivitaKohde(index) {
    const uusiHinta = Number(document.getElementById('kohde_' + index).value);
    const kohde = kohteet[index];
    kohde.hinta = uusiHinta;
    haeKohdettaTaulusta();
}

function setAlert(message) {
    document.getElementById('alert_container').innerHTML = `
    <div id="kirjaudu_sisaan_alert" class="alert alert-secondary fade show mt-2" role="alert">
        ` + message + `
    </div>`

    $('#kirjaudu_sisaan_alert').alert();
    setTimeout(() => {$('#kirjaudu_sisaan_alert').alert('close');}, 2000);
}
const kayttajat = [];
function lisaaKayttaja() {
    const tunnus = document.getElementById('lisaa_kayttaja_tunnus_input').value;
    const salasana = document.getElementById('lisaa_kayttaja_salasana_input').value;
    if(tunnus === '' || salasana === '') return;
    const kayttaja = new Kayttaja(tunnus, salasana);
    kayttajat.push(kayttaja);
    document.getElementById('kayttajia_count').innerText = 'Lisättyjä käyttäjiä: ' + kayttajat.length + ' (' + kayttajat.map(x => x.tunnus).join(', ') + ')';
    document.getElementById('lisaa_kayttaja_tunnus_input').value = '';
    document.getElementById('lisaa_kayttaja_salasana_input').value = '';
}
function kirjauduSisaan() {
    const tunnus = document.getElementById('login_tunnus_input').value;
    const salasana = document.getElementById('login_password_input').value;
    const kayttaja = kayttajat.find(x => x.tunnus === tunnus);
    if(kayttaja === undefined) {
        setAlert('Käyttäjätunnus on virheellinen!')
        return;
    }
    const msg = kayttaja.kirjauduSisaan(salasana);
    kayttajat.filter(x => x !== kayttaja).forEach(x => x.kirjauduUlos());
    setAlert(msg);
    document.getElementById('kirjautunut_kayttaja').innerText = 'Kirjautunut käyttäjä: ' + (kayttaja.kirjautunut ? kayttaja.tunnus : '-');
}

const kayttajat4c = [];
function kirjoitaKohdeTaulu4c(kayttajat) {
    document.getElementById('kohteet4c_table').innerHTML = kayttajat.map((kayttaja, i) => `
    <tr class="table-secondary">
        <td colspan="5"><h6>` + kayttaja.kayttaja.tunnus + `</h6></td>
    </tr>` + kayttaja.kohteet.map((x, j) => `
        <tr>
            <td>` + x.kohdenumero + (x.updated ? ' (Päivitetty)' : '') + `</td>
            <td>` + x.osoite + `</td>
            <td><input type="number" id="kohde4c_` + i + `_` + j + `" value="` + x.hinta + `"> <button onclick="paivitaKohde4c('` + i + `_` + j + `')" type="button" class="btn btn-sm btn-outline-primary">Päivitä</button></td>
            <td>` + x.pintaala + `</td>
            <td>` + x.neliohinta.toFixed(2) + `</td>
        </tr>`)
        .join(''))
    .join('');
}
function lisaaKohde4c() {
    const kirjautunutKayttaja = kayttajat4c.find(x => x.kayttaja.kirjautunut);
    if(kirjautunutKayttaja === undefined) {
        setAlert4c('Jonkin käyttäjän täytyy olla kirjautuneena sisään, jotta voit lisätä kohteita!');
        return;
    }
    const kohdenumero = document.getElementById('kohdenumero4c_input').value;
    const osoite = document.getElementById('osoite4c_input').value;
    const hinta = Number(document.getElementById('hinta4c_input').value);
    const pintaala = Number(document.getElementById('pintaala4c_input').value);
    const kohde = kirjautunutKayttaja.kayttaja.luoKohde(kohdenumero, osoite, hinta, pintaala);
    kirjautunutKayttaja.kohteet.push(kohde);
    kirjoitaKohdeTaulu4c(kayttajat4c);
    document.getElementById('kohdenumero4c_input').value = '';
    document.getElementById('osoite4c_input').value = '';
    document.getElementById('hinta4c_input').value = '';
    document.getElementById('pintaala4c_input').value = '';
}
function paivitaKohde4c(index) {
    const indices = index.split('_');
    const kayttaja = kayttajat4c[Number(indices[0])];
    if(kayttaja.kayttaja.kirjautunut === false) {
        setAlert4c('Et ole kirjautuneena käyttäjänä: ' + kayttaja.kayttaja.tunnus);
        kirjoitaKohdeTaulu4c(kayttajat4c);
        return;
    }
    const uusiHinta = Number(document.getElementById('kohde4c_' + index).value);
    const kohde = kayttajat4c[Number(indices[0])].kohteet[Number(indices[1])];
    kohde.hinta = uusiHinta;
    kirjoitaKohdeTaulu4c(kayttajat4c);
}
function setAlert4c(message) {
    document.getElementById('alert_container4c').innerHTML = `
    <div id="kirjaudu_sisaan_alert4c" class="alert alert-secondary fade show mt-2" role="alert">
        ` + message + `
    </div>`

    $('#kirjaudu_sisaan_alert4c').alert();
    setTimeout(() => {$('#kirjaudu_sisaan_alert4c').alert('close');}, 2000);
}
function lisaaKayttaja4c() {
    const tunnus = document.getElementById('lisaa_kayttaja_tunnus4c_input').value;
    const salasana = document.getElementById('lisaa_kayttaja_salasana4c_input').value;
    if(tunnus === '' || salasana === '') return;
    const kayttaja = new Kiinteistovalittaja(tunnus, salasana);
    kayttajat4c.push({ kayttaja: kayttaja, kohteet: [] });
    document.getElementById('kayttajia_count4c').innerText = 'Lisättyjä käyttäjiä: ' + kayttajat4c.length + ' (' + kayttajat4c.map(x => x.kayttaja.tunnus).join(', ') + ')';
    document.getElementById('lisaa_kayttaja_tunnus4c_input').value = '';
    document.getElementById('lisaa_kayttaja_salasana4c_input').value = '';
    kirjoitaKohdeTaulu4c(kayttajat4c);
}
function kirjauduSisaan4c() {
    const tunnus = document.getElementById('login_tunnus4c_input').value;
    const salasana = document.getElementById('login_password4c_input').value;
    const kayttaja = kayttajat4c.find(x => x.kayttaja.tunnus === tunnus);
    if(kayttaja === undefined) {
        setAlert4c('Käyttäjätunnus on virheellinen!')
        return;
    }
    const msg = kayttaja.kayttaja.kirjauduSisaan(salasana);
    kayttajat4c.filter(x => x !== kayttaja).forEach(x => x.kayttaja.kirjauduUlos());
    setAlert4c(msg);
    document.getElementById('kirjautunut_kayttaja4c').innerText = 'Kirjautunut käyttäjä: ' + (kayttaja.kayttaja.kirjautunut ? kayttaja.kayttaja.tunnus : '-');
}