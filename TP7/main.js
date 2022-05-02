const CALC=8;
let Array=[3,2,15,18,3,8];
let SecArray=[0,10,15,2];
//ex 1
function racine(x) {
    let result = Math.sqrt(x);
    document.write("Racine :"+result+"<br>");
}
//ex 2
function power(x,n)
{
    let ret = Math.pow(x,n);
    return ret;
}
//ex 3
function factoriel(n) { 
    let resultat;
    if (n > 1) {
        resultat=  n*factoriel(n-1);   
    }
    else
        resultat=1;
    return resultat;
}
//ex 4
function max_array(array) {// ou Math.max.aply()
    let max = array[0]
    for (let i = array.length; i > 0; i--) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
// ex 5
function search_array(array, search) {
    let ret = false;
    for (let i = array.length; i > 0; i--) {
        if (search === array[i]) {
            ret = true;
        }
    }
    return ret;
}
// ex 6
function fusion_array(array, secArray) {
    let fusionArray=array;
    for (let i = 0; i < secArray.length; i++) {
        fusionArray.push(secArray[i]);
    }
    return fusionArray;
}
// ex 7
function nb_premier() {
    let n,diviseur,nbfacteurs,a,puissance;
    n = parseInt(prompt("Nb premier : "));
    document.write(n+"=");
    a=n;
    nbfacteurs=0;
    for (diviseur=2; diviseur <= Math.floor(n/2); diviseur++)
    {
        if (a%diviseur==0) {
            nbfacteurs++;
            puissance=1;
            a=a/diviseur;
            while (a%diviseur==0) {
                puissance++;
                a=a/diviseur;
            }
            if (nbfacteurs>1) {
                document.write(" * ");
            }
            document.write(diviseur+"^"+puissance);
        }
    }
    if (nbfacteurs==0) {
        document.write(n);
    }
}

racine(CALC);
document.write("puisace de 2 : "+ power(CALC,2) +"<br>");
document.write("factorielle : "+ factoriel(8)  +"<br>");
document.write("tableaux : "+Array+"<br>");
document.write("max tableaux : "+ max_array(Array) +"<br>");
document.write("recherche 2 : "+search_array(Array, 2)+" et 14"+search_array(Array, 14)+"<br>");
document.write("tableaux 2 : "+SecArray+"<br>");
document.write("fusion tableaux : " + fusion_array(Array, SecArray) +"<br>");
document.write("<h2>Nombre Premier</h2>");
nb_premier();