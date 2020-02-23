//Kirjoita tehtävän ot3b koodit tähän

function tarkastaPostinumero(postinumero){

    if (postinumero.length==5 && isNaN(postinumero)!==true){
        console.log('postinumero on kohillaan')
        return true;
    }
    else {
        console.log('Postinumero ei ole kohillaan')
        return false;
    }

}