/*
Tehtävään käytetyttyjen elementtien id:et:
- lisaa-postaus-button
- lisaa-postaus-panel
- tallenna-postaus-button
- peruuta-postaus-button
- otsikko-input
- postaus-input
- postaus-container
*/

let postaukset = [];

const getPostCard = (otsikko, postaus, index) => {
    return `
        <div class="card text-left">
            <div class="card-body">
                <h5 class="card-title">` + otsikko + `</h5>
                <p class="card-text">` + postaus + `</p>
                <button class="btn btn-danger" onclick="poistaPostaus(` + index + `)">Poista</button>
            </div>
        </div>
    `;
};

//Kirjoita tehtävän ot6d koodit tähän