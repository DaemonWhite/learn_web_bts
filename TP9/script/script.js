function decimalToHexadecomal(decimalValue) {
    return parseInt(decimalValue, 10).toString(16);
}

function decimalToBinary(decimalValue) {
    return parseInt(decimalValue, 10).toString(2);
}

function hexaToDecimal(hexadecimalValue) {
    return parseInt(hexadecimalValue, 16);
}

function hexaToBinayr(hexadecimalValue) {
    return parseInt(hexadecimalValue, 16).toString(2);
}

function binaryToDecimal(binaryValue) {
    return parseInt(binaryValue, 2);
}

function binaryToHexadecomal(binaryValue) {
    return parseInt(binaryValue, 2).toString(16);
}

function verifBinaire(target, valu) {
    let lastValu = valu[valu.length];
    console.log (lastValu)
    if (lastValu != 0){
        valu = valu.substring(0, valu.length-1);
    }

    target.value = valu; 

}

function binaireModif(num){
    let valu =num.value;
    let hexa = document.getElementById("hexa");
    let deci = document.getElementById("deci");
    verifBinaire(num,valu);
    console.log(num);

    deci.value = binaryToDecimal(valu);
    hexa.value = "0x" + binaryToHexadecomal(valu);
}

function hexaModif(num){
    let valu =num.value;
    let bina = document.getElementById("bina");
    let deci = document.getElementById("deci");
    
    console.log(num)

    deci.value = hexaToDecimal(valu);
    bina.value = hexaToBinayr(valu);
}

function decimalModif(num){
    let valu =num.value;
    let hexa = document.getElementById("hexa");
    let bina = document.getElementById("bina");
    
    console.log(num)

    bina.value = decimalToBinary(valu);
    hexa.value = "0x" + decimalToHexadecomal(valu);
}

function canvas() {
    let canvas = document.getElementById("dieux");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.arc(75, 75, 13, 0, 2 * Math.PI);
        ctx.fill()
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'lightgrey';
        ctx.arc(75, 75, 8, 0, 2 * Math.PI);
        ctx.fill()
        
    }
    
}

function circleCanvas(cible, x1, y1 ,size, reduce,) {
    let canvas = document.getElementById(cible);
    if (canvas.getContext) {
        let lessSize = size-reduce;
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.arc(x1, y1, size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'lightgrey';
        ctx.arc(x1, y1, lessSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        
    }
}

function lineCanvas(cible, x1, y1, x2, y2, size) {
    let canvas = document.getElementById(cible);
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = size;
        ctx.strokeStyle = 'red';
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }
}
  