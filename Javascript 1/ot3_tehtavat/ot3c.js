//Kirjoita tehtävän ot3c koodit tähän

const laskeYhteen = function(luku1, luku2) {
    console.log('laskeYhteen')
     //Määrittele tulos niin että arvo1 ja arvo2 lasketaan yhteen
    return luku1 + luku2
   }
   laskeYhteen()
   
   const vahenna = function(luku1, luku2,merkki) {
    console.log('vahenna')
       const tulos = luku1 - luku2; //Määrittele tulos niin että arvo2 vähennetään arvos1:stä
       return tulos
   }
   
   const kerro = function(luku1, luku2) {
    console.log('kerro')
       const tulos = luku1*luku2; //Määrittele tulos niin että arvo1 kerrotaan arvo2:lla
       return tulos
   }
   
   const jaa = function(luku1, luku2) {
    console.log('jaa')
       const tulos = luku1/luku2; //Määrittele tulos niin että arvo1 jaetaan arvo2:lla
       return tulos
   }

const valitseLasku=function(luku1, luku2, merkki) {
    console.log("NGF: ", merkki);
    

    if(merkki ==='+'){
        console.log('yhteenlasku')
        
        return laskeYhteen(luku1, luku2, merkki)
    }

     if(merkki === '-'){
        console.log('vähennyslasku')
        return vahenna(luku1, luku2, merkki)

    }

    if(merkki === '*'){
        console.log('kertolasku')
        return kerro(luku1, luku2, merkki)

    }

    if(merkki === '/'){
        console.log('jakolasku')
        return jaa(luku1, luku2, merkki)

    }
}

const suoritaLaskutoimitus=function(luku1, luku2, merkki){
    console.log('lol')
    return valitseLasku(luku1, luku2, merkki)

}
