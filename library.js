// A generic class for the different graphics objects to inherit from
class Thing {
    constructor() {
        this.color = "#000000";
        this.stroke = "#000000";
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.hasBorder = false;
        this.lineWidth = 1;
        this.filled = true;
        this.rotation = 0;
    }

    startDraw() {
        if(this.filled) {
            fill(this.color);
        }

        if(this.hasBorder) {
            stroke(this.stroke);
            strokeWeight(this.lineWidth);
        } else {
            noStroke();
        }

        if(this.rotation !== 0) {
            translate(this.x, this.y);
            rotate(this.rotation);
            translate(-this.x, -this.y);
        }

    }

    endDraw() {
        if(this.rotation !== 0) {
            translate(this.x, this.y);
            rotate(-this.rotation);
            translate(-this.x, -this.y);
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        if(arguments.length!=2) {
            throw new Error("move() requires 2 arguments");
        }
        if(typeof x !== "number" || typeof y !== "number") {
            throw new Error("move() requires 2 numbers");
        }
        this.x += x;
        this.y += y;
    }

    setRotation(rotation) {
        this.rotation = rotation;
    }

    rotate(rotation) {
        this.rotation += rotation;
    }

    setColor(color) {
        this.color = color;
        this.isFilled = true;
    }

    getColor() {
        return this.color;
    }

    isFilled() {
        return this.filled;
    }

    setBorderColor(color) {
        this.stroke = color;
        this.hasBorder = true;
    }

    hasBorder() {
        return this.hasBorder;
    }

    setBorder(hasBorder) {
        this.hasBorder = hasBorder;
    }

    setBorderWidth(lineWidth) {
        this.lineWidth = lineWidth;
        this.hasBorder = true;
    }

    getBorderWidth() {
        return this.lineWidth;
    }

    setWidth(width) {
        this.width = width;
    }

    getWidth() {
        return this.width;
    }

    setHeight(height) {
        this.height = height;
    }

    getHeight() {
        return this.height;
    }
}

//Add function, takes a Thing object and adds it to the list of objects to be drawn
function add(thing) {
    if(!(thing instanceof Thing)) {
        throw new Error("That's not a thing we can add");
    }
    thing.draw();
}

//Rectangle class, extension of thing
class Rectangle extends Thing {
    constructor(width,height) {
        super();
        if(arguments.length != 2) {
            throw new Error("Rectangle() requires 2 arguments");
        }
        if(typeof width !== "number" || typeof height !== "number") {
            throw new Error("Rectangle() requires 2 numbers");
        }
        this.width = Math.max(0,width);
        this.height = Math.max(0,height);
    }

    draw() {
        this.startDraw();
        rect(this.x, this.y, this.width, this.height);
        this.endDraw();
    }
}

//Circle class, extension of thing
class Circle extends Thing {
    constructor(radius) {
        super();
        if(arguments.length != 1) {
            throw new Error("Circle() requires 1 argument");
        }
        if(typeof radius !== "number") {
            throw new Error("Circle() requires a number");
        }
        this.radius = Math.max(0,radius);
    }

    draw() {
        this.startDraw();
        circle(this.x, this.y, this.radius*2);
        this.endDraw();
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }
}

//Triangle class, extension of thing
class Triangle extends Thing {
    constructor(width,height) {
        super();
        if(arguments.length != 2) {
            throw new Error("Triangle() requires 2 arguments");
        }
        if(typeof width !== "number" || typeof height !== "number") {
            throw new Error("Triangle() requires 2 numbers");
        }
        this.width = Math.max(0,width);
        this.height = Math.max(0,height);
    }

    draw() {
        this.startDraw();
        triangle(this.x, this.y, this.x+this.width, this.y, this.x+this.width/2, this.y-this.height);
        this.endDraw();
    }
}

//Ellipse class, extension of thing
class Ellipse extends Thing {
    constructor(width,height) {
        super();
        if(arguments.length != 2) {
            throw new Error("Ellipse() requires 2 arguments");
        }
        if(typeof width !== "number" || typeof height !== "number") {
            throw new Error("Ellipse() requires 2 numbers");
        }
        this.width = Math.max(0,width);
        this.height = Math.max(0,height);
    }

    draw() {
        this.startDraw();
        ellipse(this.x, this.y, this.width, this.height);
        this.endDraw();
    }
}

//Text class, extension of thing
class Text extends Thing {
    constructor(text) {
        super();
        if(arguments.length != 1) {
            throw new Error("Text() requires 1 argument");
        }
        if(typeof text !== "string") {
            throw new Error("Text() requires a string");
        }
        this.text = text;
    }

    draw() {
        this.startDraw();
        text(this.text, this.x, this.y);
        this.endDraw();
    }

    setText(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

//Line class, extension of thing
class Line extends Thing {
    constructor(x1,y1,x2,y2) {
        super();
        if(arguments.length != 4) {
            throw new Error("Line() requires 4 arguments");
        }
        if(typeof x2 !== "number" || typeof y2 !== "number"||typeof x1 !== "number" || typeof y1 !== "number") {
            throw new Error("Line() requires 4 numbers");
        }
        this.x = x1;
        this.y = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw() {
        this.startDraw();
        line(this.x, this.y, this.x2, this.y2);
        this.endDraw();
    }

    setStart(x1,y1) {
        if(arguments.length != 2) {
            throw new Error("setStart() requires 2 arguments");
        }
        if(typeof x1 !== "number" || typeof y1 !== "number") {
            throw new Error("setStart() requires 2 numbers");
        }
        this.x = x1;
        this.y = y1;
    }

    setEnd(x2,y2) {
        if(arguments.length != 2) {
            throw new Error("setEnd() requires 2 arguments");
        }
        if(typeof x2 !== "number" || typeof y2 !== "number") {
            throw new Error("setEnd() requires 2 numbers");
        }
        this.x2 = x2;
        this.y2 = y2;
    }

    getStart() {
        return {x:this.x,y:this.y};
    }

    getEnd() {
        return {x:this.x2,y:this.y2};
    }
}

//Image class, extension of thing
class Image extends Thing {
    constructor(imgObj) {
        super();
        if(arguments.length != 1) {
            throw new Error("Image() requires 1 argument");
        }
        if(!(imgObj instanceof p5.Image)) {
            throw new Error("Image() requires a preloaded p5 image object");
        }
        this.imgObj = imgObj;
    }

    draw() {
        this.startDraw();
        image(this.imgObj, this.x, this.y);
        this.endDraw();
    }

    setImg(imgObj) {
        this.imgObj = imgObj;
    }

    getImg() {
        return this.imgObj;
    }

}