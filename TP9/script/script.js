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

    if (valu == "") {
        return 0;
    }

    let lastValu = valu[valu.length-1];
    if (!lastValu.match(/[0-1]/g)){
        valu = valu.substring(0, valu.length-1);
        target.value = valu; 
    }


}

function verifHexa(target, valu) {

    if (valu == "") {
        return 0;
    }

    let lastValu = valu[valu.length-1];
    if (!lastValu.match(/[0-9|a-f]/gi)){
        valu = valu.substring(0, valu.length-1);
        console.log('bite', lastValu)
        target.value = "0x" + valu; 
    }


}

function verifDeci(target, valu) {

    if (valu == "") {
        return 0;
    }

    let lastValu = valu[valu.length-1];
    if (!lastValu.match(/[0-9]/g)){
        valu = valu.substring(0, valu.length-1);
        target.value = valu; 
    }


}

function binaireModif(num){
    let valu =num.value;
    let hexa = document.getElementById("hexa");
    let deci = document.getElementById("deci");

    if (valu == "") {
        return 0;
    }

    verifBinaire(num,valu.toString());

    deci.value = binaryToDecimal(valu);
    hexa.value = "0x" + binaryToHexadecomal(valu);
}

function hexaModif(num){
    let valu =num.value;
    let bina = document.getElementById("bina");
    let deci = document.getElementById("deci");
    valu = valu.toString();
    valu = valu.replace(/[0]{1}[x]{1}/g, "")
    console.log(valu)

    if (valu == "") {
        return 0;
    }

    verifHexa(num,valu.toString());

    deci.value = hexaToDecimal(valu);
    bina.value = hexaToBinayr(valu);
}

function decimalModif(num){
    let valu =num.value;
    let hexa = document.getElementById("hexa");
    let bina = document.getElementById("bina");

    if (valu == "") {
        return 0;
    }

    verifDeci(num,valu.toString());
    
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


function rountedRectangle(canvas, color, text, x, y, width, height, radius) {
    let xText = width;
    let yText = height;
    width = width*2;
    height = height*2
    if (width < 2 * radius) 
        radius = width / 2;
    if (height < 2 * radius)
        radius = height / 2;

    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + width, y, x + width, y + height, radius);
        ctx.arcTo(x + width, y + height, x, y + height, radius);
        ctx.arcTo(x, y + height, x, y, radius);
        ctx.arcTo(x, y, x + width, y, radius);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.font = '20px serif';
        console.log(width/(20*text.length))
        ctx.fillText(text, x + xText-20*(text.length/2), y + yText);
        ctx.closePath();
    }
}

let rectLine = document.getElementById("rectLine");
rountedRectangle(rectLine, "lightblue", "ok",0, 0, 100, 50, 8);
rountedRectangle(rectLine, "orange", "ok",220, 100, 50, 100, 8);
rountedRectangle(rectLine, "lightpink", "ok",340, 0, 100, 50, 8);

class Rectangle {
    /**
     * constructor int the rectangle
	 * @param {HTMLElement} canvas 
	 * @param {string} color
     * @param {string} text
     * @param {int} x   position x in the canvas
     * @param {int} y   position y in the canvas
     * @param {int} width
     * @param {int} height
     * @param {int} radius
	 */

    constructor(canvas, color, text, x, y, width, height, radius) {
        this.canvas = canvas;
        this.color = color;
        this.cordonate = Object.assign({}, {
            x: x,
            y:y,
            width: width,
            height: height,
            radius: radius
        });

        if (canvas.getContext) {
            this.ctx = canvas.getContext("2d");
            this.draw();
            this.writeText(text);
        } else {
            console.error("Canvas is not define");
        }

    }
    
    draw() {
        let x = this.cordonate.x;
        let y = this.cordonate.y;
        let radius = this.cordonate.radius;
        let width = this.cordonate.width*2;
        let height = this.cordonate.height*2;

        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, radius);
        this.ctx.arcTo(x + width, y + height, x, y + height, radius);
        this.ctx.arcTo(x, y + height, x, y, radius);
        this.ctx.arcTo(x, y, x + width, y, radius);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    /**
     * 
     * @param {string} text 
     */
    writeText(text) {
        let xText = this.cordonate.x + this.cordonate.width-20*(text.length/2);
        let yText = this.cordonate.y + this.cordonate.height; 
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px serif';
        this.ctx.fillText(text, xText, yText);
        this.ctx.closePath();
    }

    delete() {
        this.ctx.clearRect(this.cordonate.x,
            this.cordonate.y,
            this.cordonate.width*2,
            this.cordonate.height*2
        );
    }
}

class AutoDatagrame {
    /**
     * 
     * @param {HTMLElement} canvas 
     * @param {Array} rectangle liste rectangle
     * 
     */
    constructor(canvas, rectangle = []){
        this.canvas = canvas;
        this.rectangle = [];
        this.traceLigne = []
        rectangle.forEach(element => {
            this.addRectangle(element.id,
                element.x,
                element.y,
                element.width,
                element.height,
                element.radius,
                element.color,
                element.text
                )
        });
        this.autoDetectLigne()
    }

    autoDetectLigne() {
        for (let i = 0; i < this.rectangle.length; i++){
            for (let i2 = i; i2 < this.rectangle.length; i2++) {
                if (this.rectangle[i].id < this.rectangle[i2].id) {
                    console.log(i, i2)
                }
            }
        }
    }

    addRectangle(id, x, y, w, h, r, color, texte){
        let eRectangle = Object.assign({},{
            id: id,
            x: x,
            y: y,
            width: w,
            height: h,
            radius: r,
            color: color,
            text: texte
        });
        this.rectangle.push(eRectangle);
        new Rectangle(this.canvas, color, texte, x, y, w, h, r)
    }

}
let rectTEste = document.getElementById("rectAuto");

tes = Object.assign({},{
    id: 1,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    radius: 8,
    color: "lightpink",
    text: "jesus"
});

tes1 = Object.assign({},{
    id: 2,
    x: 220,
    y: 100,
    width: 50,
    height: 100,
    radius: 8,
    color: "orange",
    text: "jesus"
});

tes2 = Object.assign({},{
    id: 1,
    x: 340,
    y: 0,
    width: 100,
    height: 50,
    radius: 8,
    color: "lightblue",
    text: "lightpink"
});

arr = [tes, tes1, tes2]
let e = new AutoDatagrame(rectTEste, arr)