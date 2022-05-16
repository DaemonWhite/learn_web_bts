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
    let nbTri=0;
    let tabTri=[];

    let sortieATrier = document.getElementById("a_trier");
    let sortieTrie = document.getElementById("resultat_tri");

    while (true) {
        nbTri = parseInt(prompt("Entrez le nombre de valeurs à trier"));
        if (nbTri != 0) {
            break;
        } else {
            alert("Veuillez entrer un nombre");
        }
    }
    for (let i = 0; i < nbTri; i++) {
        tabTri.push(parseInt(prompt("Entrez une valeur : ")));
    }

    sortieATrier.innerHTML = tabTri;

    let passage =0;

    let permutaion=false;
    do {
        permutaion = false;
        for (let i = 0; i < tabTri.length - 1 - passage; i++) {
            if (tabTri[i] > tabTri[i+1]) {
                passage--;
                let tmp = tabTri[i];
                tabTri[i] = tabTri[i+1];
                tabTri[i+1] = tmp;
                permutaion = true;
            }
        }
    } while (permutaion==true);

    sortieTrie.innerHTML = tabTri;    
}

function detectFirstLetter() {
    let recupTexte = document.getElementById("text_detect_letter").value;
    let resultFirstLetter = document.getElementById("result_first_letter");

    switch (recupTexte[0].toLowerCase()) {
        case 'a':
        case 'b':
        case 'c':
        case 'd':
            resultFirstLetter.innerHTML = recupTexte + " chaine valide ce trouvant entre a et d"
            break;
    
        default:
            resultFirstLetter.innerHTML = recupTexte + " chaine ne ce trouvant entre a et d"
            break;
    }
}

function verifArobase(texte) {
    let ret=false;

    arobasePositions = texte.indexOf("@");

    console.log(arobasePositions);

    if (arobasePositions != -1) {
        ret = true;
    } 
    
    if (texte.indexOf("@", arobasePositions) != -1) {
        ret = false;
    }

    return ret;
}

function testeArobase() {
    let resultatArobase = document.getElementById("resultat_arobase");
    let recupTexte = document.getElementById("text_detect_letter").value;

    if ( verifArobase(recupTexte) ) {
        resultatArobase.innerHTML = "L'arobase est présente";
    } else {
        resultatArobase.innerHTML = "chaine invalide";
    }
        
}

function nombreDetect() {
    let recupTexte = document.getElementById("text_detect_letter").value;
    let resultNombre = document.getElementById("result_nombre");

    if (recupTexte.match(/[0-9]/g)) {
        resultNombre.innerHTML = "Le texte contient un nombre";
    } else {
        resultNombre.innerHTML = "Le texte ne contient pas de nombre";
    }
    
}

function replaceNumberByAsterix() {
    let recupTexte = document.getElementById("text_detect_letter").value;
    let resultReplace = document.getElementById("result_replace");

    resultReplace.innerHTML = recupTexte.replace(/[0-9]/g, "*");
    
}