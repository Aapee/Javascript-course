//Aseta "kokonaishinta" -muuttujan arvo siten, että ohjelma toimii tehtävänannon mukaisesti
const laskeLippujenHinta = function(kakkosluokka, menopaluu, alennus, maara) {
    let kokonaishinta = 0;
    //KIRJOITA KOODISI TÄMÄN ALAPUOLELLE...

    // KAKKOSLUOKAN VAIHTOEHDOT
   if (kakkosluokka==true && menopaluu==true && alennus==true){
       console.log('kakkosluokan lippu menopaluulla ja alennuksella')
       let kakkosluokka=86.10;
       let menopaluu=2;
       let alennus=0.5;
       kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }
   else if(kakkosluokka==true && menopaluu!=true && alennus==true){
        console.log('kakkosluokan lippu menolla ja alennuksella')
        let kakkosluokka=86.10;
        let menopaluu=1;
        let alennus=0.5;
       kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }

   else if(kakkosluokka==true && menopaluu==true && alennus!=true){
        console.log('kakkosluokan lippu menopaluulla')
        let kakkosluokka=86.10;
        let menopaluu=2;
        let alennus=1;
        kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }

   else if(kakkosluokka==true && menopaluu!=true && alennus!=true){
        console.log('kakkosluokan lippu')
        let kakkosluokka=86.10;
        let menopaluu=1;
        let alennus=1;
        kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }
    //ykkösluokan speksit
   else if(kakkosluokka!=true && menopaluu==true && alennus==true){
    console.log('Ensimmäisen luokan lippu menopaluulla ja alennuksella')
    let kakkosluokka=86.10*2;
    let menopaluu=2;
    let alennus=0.5;
   kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }
   else if(kakkosluokka!=true && menopaluu!=true && alennus==true){
    console.log('Ensimmäisen luokan lippu menolla ja alennuksen kanssa')
    let kakkosluokka=86.10*2;
    let menopaluu=1;
    let alennus=0.5;
   kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }
   else if(kakkosluokka!=true && menopaluu!=true && alennus!=true){
    console.log('Ensimmäisen luokan lippu menolla')
    let kakkosluokka=86.10*2;
    let menopaluu=1;
    let alennus=1;
   kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }
   else{
    console.log('Ensimmäisen luokan lippu menolla ja alennuksen kanssa')
    let kakkosluokka=86.10*2;
    let menopaluu=2;
    let alennus=1;
   kokonaishinta=(kakkosluokka * menopaluu * alennus) * maara;
   }
    //...KIRJOITA KOODISI TÄMÄN YLÄPUOLELLE
    return kokonaishinta;
}

