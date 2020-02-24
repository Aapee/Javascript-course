//Kirjoita tehtävän ot3d koodit tähän
// Luodaan objekti eli olio Seposta ja annetaan sille properteja eli ominaisuuksia jotka koskevat Seppoa
let seppo = {
    etunimi: 'Seppo',
    sukunimi: 'Posio',
    ika: 65,
    sukupuoli:'mies' 
  };

  const teeIhminen= function (etunimi, sukunimi, ika, sukupuoli){
     return{
        etunimi: etunimi,
        sukunimi: sukunimi,
        ika: ika,
        sukupuoli: sukupuoli
     } 
     };

     

  function muodostaInfoTeksti(ihminen){
      return  `${ihminen.etunimi} on ${ihminen.ika} vuotias ${ihminen.sukupuoli} ja hänen sukunimensä on ${ihminen.sukunimi}`
      }
    
