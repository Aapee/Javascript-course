//Aseta "alennus" ja "maksettava" muuttujille arvot siten, että ohjelma toimii tehtävänannon mukaisesti
const alennusLaskuri = function(loppusumma) {
    let alennus = 0;
    let maksettava = 0;
    //KIRJOITA KOODISI TÄMÄN ALAPUOLELLE...
    if(loppusumma>100){
        alennus=loppusumma*0.1
    }
    else{
        alennus=0
    }
    maksettava=loppusumma-alennus    
    //...KIRJOITA KOODISI TÄMÄN YLÄPUOLELLE
    return [alennus, maksettava];
}