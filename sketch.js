function setup() {
  createCanvas(400, 400);
  background(220);

  //Draw a rectangle
  let rect = new Rectangle(50, 50);
  rect.setPosition(50, 50);
  rect.setColor("red");
  add(rect);

  //Draw a circle
  let circle = new Circle(25);
  circle.setPosition(150, 75);
  circle.setColor("blue");
  add(circle);
}

function draw() {

}
