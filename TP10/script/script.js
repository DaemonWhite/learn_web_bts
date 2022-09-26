class Etudiant
{
    //Constructeur
    /**
     * 
     * @param {int} nom 
     * @param {String} prenom 
     * @param {int} numero 
     */
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
    /**
     * @param {int} unNumero
     */
    set changerNumero(unNumero) {
        this.numero = unNumero;
    }
    /**
     * @param {String} unPrenom
     */
    set changerPrenom(unPrenom) {
        this.prenom = unPrenom;
    }
    /**
     * @param {String} nom
     */
    set changerNom(nom) {
        this.nom = nom;
    }
}

class Pays
{
    /**
     * 
     * @param {HTMLelement} element 
     * @param {String} pays 
     * @param {float} pnb 
     * @param {int} annee
     */
    constructor( element, pays, pnb, annee) {
        this.root = element;
        this.pays = pays;
        this.pnb = parseFloat(pnb);
        this.annee = annee;
    }
    /**
     * 
     * @param {float} pnbSuivante 
     * @returns 
     */
    tauxCroissance(pnbSuivante) {
        let ret = ((pnbSuivante  -  this.pnb)/this.pnb  *  100);
        this.pnb = pnbSuivante;
        this.annee++;
        return ret;
    }

    affiche() {

        let div = document.createElement('div');
        this.root.appendChild(div);

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
        let f = this.a*x+this.b
        return f;
    }
    calculeRacine() {
        return (-this.b/this.a);
    }

    affiche() {
        let ret = "a=" + this.a + "<br>";
        ret += "b=" + this.b + "<br>";
        ret += "f(x)=";
        if (this.a!=0) {
            ret += "x";
        }

        if (this.b != 0) {
            if (this.b > 0) {
                ret += "+"
            }

            ret += this.b;
        }

        ret += "<br>Racine=";
        if (this.b < 0) {
            ret += (this.b*-1);
        } else {
            ret += "-" + this.b; 
        }
        ret += "/" + this.a;

        return ret;
    }
}

class PolynomeDegre2 {
    constructor(element, a, b, c) {
        this.a = a;   
        this.b = b;
        this.c = c;
    }

    evaluation(x) {

        let p = this.a * (x*x) + this.b * this.c

        return p;
    }
    /**
     * 
     * @returns {Array} si array vide impossible
     */
    calculeRacines(){
        let delta = (this.b*this.b) - 4*this.a*this.c;

        let ret = [];

        if (delta > 0) {
            let calcA = (-this.b - Math.sqrt(this.delta))/2*this.a;
            ret.push(calcA);

            let calcB = (-this.b + Math.sqrt(this.delta))/2*this.a;
            ret.push(calcB);

            
        } else if (delta == 0) {
            ret.push(-this.b/2*this.a);
        }

        return ret;
    }

    affiche() {

    }
}