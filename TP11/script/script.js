class CompteCourant {
    constructor (idCompte, solde){
        this.idCompte = idCompte;
        this.solde = solde;
    }

    get getNom() {
        return this.client;
    }
    /**
     * 
     * @param {float} credit credit 
     */
    crediter(credit) {
        this.solde += credit;
    }

    debiter(debit) {
        if (this.solde > 0) {

            if ( this.solde - debit > 0 ) {
                this.solde -= debit;
            } else {
                this.solde = 0;
            }
            
        } else {
            console.log('Debit Impossible')
        }
    }

    infos() {
        return ("Compte courant numéro "+ this.idCompte +", solde = " + this.solde + " euros");
    }
}

class CompteEpargne {
    constructor(idCompte, solde, interet, verolle) {
        this.idCompte = idCompte;
        this.solde = solde;
        this.interet = interet;
        this.verolle = verolle;
    }

    credit(credit) {
        this.solde += credit
    }

    debit(debit) {
        if (this.solde > 0 && !this.verolle) {

            this.solde -= debit;
            
        } else {
            console.log('Debit Impossible')
        }
    }

    ajouterInterets(interet) {
        this.interet = interet;
    }

    get getSolde() {
        return ("Compte épargne numéro "+ this.idCompte +", a " 
        + this.interet + " % de taux d'intérêts, de solde = "
        + this.solde +" euros, compte non bloqué.");
    }
}
class Client {
    constructor(client){
        this.client = client;
        this.courant = new CompteCourant(client, 0);
        this.epargne = new CompteEpargne(client, 0, 2, false);
    }

    get getNom() {
        return this.client
    }

    /**
     * 
     * @param {bool} compte 
     * @param {float} debit 
     */
    debiter(compte, debit) {
        if (compte) {
            this.courant.debiter(debit)
        } else {
            this.epargne.debiter(debit)
        }
    }
}