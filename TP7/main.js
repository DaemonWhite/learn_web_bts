const calc=8;
//ex 1
function racine(x) {
    let result = Math.sqrt(x);
    document.write("Racine"+result+"<br>");
}
//ex 2
function puisance(x,n)
{
    let ret = Math.pow(x,n);
    return ret;
}
//ex 3
function factoriel(fact) {
    if (fact > 1) {
        var num = fact-1;
    }
    let result = factoriel(x);
    document.write("e"+num)
    return result
}

racine(calc);
let pui=puisance(calc,2);
document.write("puisace de 2 : "+pui+"<br>")
factoriel(5);