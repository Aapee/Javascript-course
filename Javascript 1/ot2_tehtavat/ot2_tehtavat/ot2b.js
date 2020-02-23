//Aseta "tulos" -muuttujan arvo siten, että ohjelma toimii tehtävänannon mukaisesti
const nopanHeitto = function(silmaluku1, silmaluku2) {
    let tulos = '';
    //KIRJOITA KOODISI TÄMÄN ALAPUOLELLE...
        if(silmaluku1==1 && silmaluku2==1){
            tulos='YkkösPari'
        }
         else if(silmaluku1==2 && silmaluku2==2){
            tulos='kakkospari'
        }
        else if(silmaluku1==3 && silmaluku2==3){
            tulos='kolmospari'
        } 
        else if(silmaluku1==4 && silmaluku2==4){
            tulos='nelospari'
        } 
        else if(silmaluku1==5 && silmaluku2==5){
            tulos='vitospari'
        } 
        else if(silmaluku1==6 && silmaluku2==6){
            tulos='kutospari'
        }
    else{
        tulos = 'Silmäluvut ' + silmaluku1 + ' ja ' + silmaluku2 + '.';
    }
 



    //...KIRJOITA KOODISI TÄMÄN YLÄPUOLELLE
    return tulos;
}