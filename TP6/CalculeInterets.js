let prix = 10000;
const intertet = 4.5;
let an = parseInt(prompt("Nombre d'anner : "));

for (let i = 0; i <= an; i++) {
    prix = prix*intertet;
    debugger;
}
console.log("an : "+an +"prix final : "+prix)