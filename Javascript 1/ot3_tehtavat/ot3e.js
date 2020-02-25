//Kirjoita tehtävän ot3e koodit tähän

const teeKohde=function(kohdenumero, osoite, hinta, pintaala){
    console.log(parseInt(hinta)/parseInt(pintaala))
    return{
        kohdenumero:kohdenumero,
        osoite:osoite,
        hinta:hinta,
        pintaala:pintaala,
        neliohinta: (parseInt(hinta)/parseInt(pintaala))
    }
    
}


    const haeKohde= function(kohde, hakuehto){
    

        if (kohde.kohdenumero.toLowerCase() === hakuehto.toLowerCase() || kohde.osoite.toLowerCase() === hakuehto.toLowerCase()){
            console.log('true')
            return true;
        }
        else{
            console.log('jep')
            return false;
        }
    }

    
