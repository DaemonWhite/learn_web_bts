function comptageVoyelles() {
    
    let nom =document.getElementById("comptageVoyelle").value;
    let convStringArray = nom.toLowerCase();
    
    //let num_vouyelle=[];
    let numVouyelle=[0,0,0,0,0,0];

    for (let i = 0; i < convStringArray.length; i++) {
        
        switch (convStringArray[i]) {
            case "a": numVouyelle[0]++ ;break;
            case "e": numVouyelle[1]++ ;break;
            case "i": numVouyelle[2]++ ;break;
            case "o": numVouyelle[3]++ ;break;
            case "u": numVouyelle[4]++ ;break;
            case "y": numVouyelle[5]++ ;break;
        }
        
    }

    document.getElementById("resultat_voyelle").innerHTML = 
        "Nombre de voyelles a : " + numVouyelle[0] + "<br>" +
        "Nombre de voyelles e : " + numVouyelle[1] + "<br>" +
        "Nombre de voyelles i : " + numVouyelle[2] + "<br>" +
        "Nombre de voyelles o : " + numVouyelle[3] + "<br>" +
        "Nombre de voyelles u : " + numVouyelle[4] + "<br>" +
        "Nombre de voyelles y : " + numVouyelle[5] + "<br>";
}

function conjugueur() {

    let verbe = document.getElementById("conjugueur").value;
    let resultatConjugueur = document.getElementById("resultat_conjugueur");
    let convStringArray=[], verifEr =[];

    if (verbe.substring(verbe.length-2) != "er") {
        resultatConjugueur.innerHTML = "Veuillez entrer un verbe en terminant par er";
    } else {
        baseVerbe = verbe.substring(0, verbe.length-2).toLowerCase();
    
        document.getElementById("resultat_conjugueur").innerHTML =
        "je " + baseVerbe + "e<br>" +
        "tu " + baseVerbe + "es<br>" +
        "il/elle " + baseVerbe + "e<br>" +
        "nous " + baseVerbe + "ons<br>" +
        "vous " + baseVerbe + "ez<br>" +
        "ils/elles " + baseVerbe + "ent";
    }
}

function triBulle()
{
    a=[3,2,1,4,5,6,7,8,9,10];
    let permutaion=false;
    do {
        for (let i = 0; i < a.length-2; i++) {
            if (a[i] > a[i+1]) {
                let tmp = a[i];
                a[i] = a[i+1];
                a[i+1] = tmp;
                permutaion = true;
            }
        }
        console.log(permutaion);
    } while (permutaion==true);

    console.log(a);
    
}
triBulle();
