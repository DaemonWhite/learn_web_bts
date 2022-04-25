let n1 = 1;
let n2 = 1;
let somme ;

let nbr = parseInt(prompt("Saisir la valeur de pour la suite Fibonacci"));

document.write("F(0)=1<br>");
document.write("F(1)=1<br>");
for(let i = 2; i < nbr; i++) {
  
        somme = n1 + n2; 
        n1 = n2; 
        n2 = somme;

        document.write("F("+i+")="+somme+"<br>");

  
}