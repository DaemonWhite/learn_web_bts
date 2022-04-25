const Five = 5;
const Seven = 7;
const max = 1000;
const min = 1
let fivPass = 1;
let sevenPass = 1;


for (let i = min; i <= max; i++) {

    if ( i == Seven*sevenPass && i == Five*fivPass) {   
        document.write("FizzBuzz");
        fivPass++;
        sevenPass++;
    } else if (i == Seven*sevenPass) {
        document.write("Buzz");
        sevenPass++;
    } else if (i == Five*fivPass) {
        document.write("Fizz");
        fivPass++;
    } else {
        document.write(i);
    }
    document.write("<br>");
}