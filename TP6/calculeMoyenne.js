let max = parseInt(prompt("Nombre a cacluler"));
let total = 0.0;

for (let i = 1; i <= max; i++) {
    total += parseFloat(prompt("Valeur " + i +" : "));
    debugger;
}

let moy = total/parseFloat(max);
debugger;
document.write("Moyenne : " + moy);