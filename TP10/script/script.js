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
        this.root.innerHTML = 
        "Pays : " + this.pays + "<br>" +
        "PNB : " + this.pnb + "<br>" +
        "Année : " + this.annee + "<br>";
    }

    testPnb(element="") {
        if (element == "") {
            element = this.root;
        }

        let paysTab = [];
        let write = "";

        let tmpPays = this.pays;
        let tmpPnb = this.pnb;
        let tmpAnnee = this.annee;

        paysTab.push(Object.assign({},
            {
                pays: "Seychelles",
                pnb: 6700.0,
                nPnb: 7250.0,
                anne: 2003
            }));

        paysTab.push(Object.assign({},
            {
                pays: "Egypte",
                pnb: 1430.0,
                nPnb: 1405.0,
                anne: 2003
               }));
        
        paysTab.forEach(e => {
            this.pays = e.pays;
            this.pnb = e.pnb;
            this.annee = e.anne;



            write += 
            "Pays " + this.pays+ 
            ": PNB de " + this.pnb + 
            " $ pour l'année " + this.annee + "<br>";

            let croissance = this.tauxCroissance(e.nPnb);

            write += 
            "Pays " + this.pays+ 
            ": PNB de " + this.pnb + 
            " $ pour l'année " + this.annee + "<br>";

            

            write += "Taux de croissance pour " + this.annee + ", " + this.pnb + " -> " + croissance + "% <br><br>" ;

            

        });

        element.innerHTML = write

        this.pays = tmpPays;
        this.pnb = tmpPnb;
        this.annee = tmpAnnee;
        

    }
}