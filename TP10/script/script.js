class Etudiant
{
    //Constructeur
    constructor( nom, prenom, numero) {
        this.nom = nom;
        this.prenom  = prenom;
        this.numero = numero;
    }

    get getNom() {
        return this.nom;
    }

    get getNumero() {
        return this.numero;
    }

    get getPrenom() {
        return this.prenom;
    }

    set changerNumero(unNumero) {
        this.numero = unNumero;
    }

    set changerPrenom(unPrenom) {
        this.prenom = unPrenom;
    }

    set changerNom(nom) {
        this.nom = nom;
    }
}

class Pays
{
    constructor( element, pays, pnb, annee) {
        this.root = element;
        this.pays = pays;
        this.pnb = parseFloat(pnb);
        this.annee = annee;
    }

    tauxCroissance(pnbSuivante) {
        let ret = ((pnbSuivante  -  this.pnb)/this.pnb  *  100);
        this.pnb = pnbSuivante;
        this.annee++;
        return ret;
    }

    affiche() {

        let div = document.createElement('div');
        this.root.appendChild(div)

        div.innerHTML =
        "Pays " + this.pays+ 
        ": PNB de " + this.pnb + 
        " $ pour l'année " + this.annee + "<br>";
    }

    
}

class PolynomeDegre1 {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    evaluation(x) {
        let f = a*x+b
        return f;
    }
    calculeRacine() {

    }

    affiche() {

    }
}