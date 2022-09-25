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

class TraceLigne {
    /**
     * 
     * @param {HTMLelement} canvas 
     * @param {int} x1 
     * @param {int} y1 
     * @param {int} x2 
     * @param {int} y2 
     * @param {int} size 
     * @param {Sring} color 
     */
    constructor(canvas, x1, y1, x2, y2, size, color){
        this.canvas = canvas;
        this.cordonate = Object.assign({}, {
            xStart: x1,
            yStart: y1,
            xEnd: x2,
            yEnd: y2,
            size: size
        })

        this.color = color;

        if (canvas.getContext) {
            this.ctx = canvas.getContext("2d");
            this.draw();
        } else {
            console.error("Canvas is not define");
        }

    }
    /**
     * @param {String} color
     */
    set setColore(color) {
        this.color = color
    }
    /**
     * @param {int} size
     */
    set size(size) {
        this.cordonate.size = size;
    }

    draw() {
        console.log(this.cordonate)
        this.ctx.beginPath();
        this.ctx.lineWidth = this.cordonate.size;
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(this.cordonate.xStart, this.cordonate.yStart);
        this.ctx.lineTo(this.cordonate.xEnd, this.cordonate.yEnd);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

class AutoDatagrame {
    /**
     * 
     * @param {HTMLElement} canvas 
     * @param {Array} rectangle liste rectangle
     * @param {Array,rectangle} rectangle.x position x
     * @param {Array,rectangle} rectangle.y position y
     * @param {Array,rectangle} rectangle.width largeur /2
     * @param {Array,rectangle} rectangle.height height /2
     * @param {Array,rectangle} rectangle.radius Rayon
     * @param {Array,rectangle} rectangle.color Rayon
     * @param {Array,rectangle} rectangle.text Rayon
     * 
     */
    constructor(canvas, rectangle = []){
        this.canvas = canvas;
        this.uuid = 0;
        this.rectangle = [];
        this.traceLignes = [];
        rectangle.forEach(element => {
            this.addRectangle(element.id,
                element.x,
                element.y,
                element.width,
                element.height,
                element.radius,
                element.color,
                element.text
                );
        });
        this.autoDetectLigne();
    }

    traceLigne() {

    }

    autoDetectLigneCordone(index) {
        let rect1 = this.rectangle[this.traceLignes[index].rect1];
        let testHeight = rect1.y + rect1.height*2
        if (testHeight > this.traceLignes[index].startY) {

            new TraceLigne(this.canvas,
                this.traceLignes[index].startX,
                this.traceLignes[index].startY,
                this.traceLignes[index].endX,
                this.traceLignes[index].startY,
                5,
                "black"
                )

            new TraceLigne(this.canvas,
                this.traceLignes[index].endX,
                this.traceLignes[index].startY,
                this.traceLignes[index].endX,
                this.traceLignes[index].endY,
                    5,
                    "black"
                    )
        } else {

            let startX  =  this.traceLignes[index].startX;
            let startY  =  this.traceLignes[index].startY;
            let endX  =  this.traceLignes[index].endX;
            let endY  =  this.traceLignes[index].endY;
            
            let point = {
                startX: startX,
                startY: startY,
                endX: startX,
                endY: startY + (endY - startY)/2
            }

            let point2 = {
                startX: startX,
                startY: startY + (endY - startY)/2,
                endX: endX,
                endY: startY + (endY - startY)/2
            }

            let point3 = {
                startX: endX,
                startY: startY + (endY - startY)/2,
                endX: endX,
                endY: endY
            }

            let tabTeste = [point, point2, point3]

            tabTeste.forEach(element => {
                console.log(element)
                new TraceLigne(this.canvas,
                    element.startX,
                    element.startY,
                    element.endX,
                    element.endY,
                        5,
                        "black"
                        )
            });

            
        }


    }

    autoDetectPositionLigne(index) {
        let rect1 = this.rectangle[this.traceLignes[index].rect1];
        let rect2 = this.rectangle[this.traceLignes[index].rect2];

        let left = rect1.x;
        let center = rect1.x + rect1.width;
        let right = rect1.x + rect1.width*2;

        let midHeight = rect1.y + rect1.height;

        let height  = rect1.y + rect1.height*2;

        let position = Object.assign({}, {
            x: rect2.x + rect2.width,
            y: rect2.y
        });

        if (height+20 < position.y) {
            console.log("Plus Bas");

            this.traceLignes[index].startX = center;
            this.traceLignes[index].startY = height;
        } else {
            console.log("Trop proche");
            if (left > position.x) {
                console.log("gauche");

                this.traceLignes[index].startX = left;
                this.traceLignes[index].startY = midHeight;
            }
            if (right < position.x) {
                console.log("droite");

                this.traceLignes[index].startX = right;
                this.traceLignes[index].startY = midHeight;
            }
            if ( ( left <= position.x ) && ( position.x <= right ) ) {
                console.log("center");

                this.traceLignes[index].startX = center;
                this.traceLignes[index].startY = height;
            }
        }

        this.traceLignes[index].endX = position.x;
        this.traceLignes[index].endY = position.y;

    }

    autoDetectLigne() {
        for (let i = 0; i < this.rectangle.length; i++){
            for (let i2 = 0; i2 < this.rectangle.length; i2++) {
                if (this.rectangle[i].id < this.rectangle[i2].id) {
                    this.traceLignes.push(Object.assign({},
                        {
                            rect1: this.rectangle[i].uuid,    
                            rect2: this.rectangle[i2].uuid,   
                        }));
                }
            }
        }

        console.log(this.traceLignes)

        for (let i = 0; i < this.traceLignes.length; i++) {
            this.autoDetectPositionLigne(i);
            this.autoDetectLigneCordone(i);
        }

        this.traceLigne()
        console.log(this.traceLignes)
    }
    /**
     * Ajoute un rectangle
     * @param {int} id "Definine ss position pour le tracer Ex 0 trace vers 1 mais 0 ne trace pas vers 2"
     * @param {int} x 
     * @param {int} y 
     * @param {int} w Largeur /2
     * @param {int} h Hauteur /2
     * @param {int} r 
     * @param {String} color Nom de la couleur ex: green; red; blue
     * @param {String} texte 
     */
    addRectangle(id, x, y, w, h, r, color, texte){
        let eRectangle = Object.assign({},{
            uuid: this.uuid++,
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
    y: 150,
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

arr = [tes, tes1, tes2];
let e = new AutoDatagrame(rectTEste, arr);