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

function center(x2) {
    let ret = (x2/4);
    return ret;
}

function rectangle(id, texte, x1, x2, y1, y2, r, b, g) {
    let canvas = document.getElementById(id);
    if (canvas.getContext) {
        function roundRect(x, y, w, h, radius)
{   
        var canvas = document.getElementById("canvas6");
        var context = canvas.getContext("2d");
        var r = x + w;
        var b = y + h;
        context.beginPath();
        context.strokeStyle="green";
        context.lineWidth="4";
        context.moveTo(x+radius, y);
        context.lineTo(r-radius, y);
        context.quadraticCurveTo(r, y, r, y+radius);
        context.lineTo(r, y+h-radius);
        context.quadraticCurveTo(r, b, r-radius, b);
        context.lineTo(x+radius, b);
        context.quadraticCurveTo(x, b, x, b-radius);
        context.lineTo(x, y+radius);
        context.quadraticCurveTo(x, y, x+radius, y);
        context.stroke();
}

    }
}

function roundRect(x, y, w, h, radius)
{
    console.log(x, y)
    var canvas = document.getElementById("rectangle");
    var context = canvas.getContext("2d");
    var r = x + w;
    var b = y + h;
    context.beginPath();
    context.strokeStyle="green";
    context.fillStyle="green";
    context.lineWidth="4";
    context.moveTo(x+radius, y);
    context.lineTo(r-radius, y);
    context.quadraticCurveTo(r, y, r, y+radius);
    context.lineTo(r, y+h-radius);
    context.quadraticCurveTo(r, b, r-radius, b);
    context.lineTo(x+radius, b);
    context.quadraticCurveTo(x, b, x, b-radius);
    context.lineTo(x, y+radius);
    context.quadraticCurveTo(x, y, x+radius, y);
    context.stroke();
    context.fill();
}

function rectLine(target, rect) {

    let rectNumberByID = [];

    rect.forEach(element => {
        console.log(rectNumberByID.length, element[0])

        if (rectNumberByID.length < element[0]) {
            console.log('d')
        } else {
            rectNumberByID
        }

        rectangle(target,
            element[3],
            element[1][0],
            element[1][1],
            element[1][2],
            element[1][3],
            element[2][0],
            element[2][1],
            element[2][2],
            )
    });

}