
let fr = 24;
let t = 0;
let rho = 40;
let bigSlider, smallSlider, rhoSlider, ClearButton;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  strokeWeight(1);
  stroke(0);
  textSize(15);

  rhoSlider = createSlider(10, 400, 10, 10);
  rhoSlider.position(20, 20);
  bigSlider = createSlider(1, 400, 100, 1);
  bigSlider.position(20, 40);
  smallSlider = createSlider(10, 600, 20, 1);
  smallSlider.position(20, 60);


  text('Rho - Pen point distance from center = ' + rhoSlider.value(),
       rhoSlider.x * 2 + rhoSlider.width,
       35);

  text('R - Outside wheel radius = ' + bigSlider.value(),
       bigSlider.x * 2 + bigSlider.width,
       55);

  text('r - Inner wheel radius = ' + smallSlider.value(),
      smallSlider.x * 2 + smallSlider.width,
      75);



  // create clear button
  ClearButton = createButton('Clear');
  ClearButton.position(35, 105);
  ClearButton.mousePressed(clearLines);


}

function draw() {

  frameRate(24);
  translate(displayWidth/2,displayHeight/2);


  noFill();
  r = smallSlider.value();
  R = bigSlider.value();
  rho = rhoSlider.value();

  delta = 0.02;

  if (t == 0) {
    ref_rho = rho;
    ref_r = r;
    ref_R = R;
  }
  else {

    // logic for drawing lines
    x = (R - r)*cos(t) + rho*cos(((R-r)/r)*t);
    y = (R - r)*sin(t) - rho*sin(((R-r)/r)*t);
    past_x = (R - r)*cos(t-delta) + rho*cos(((R-r)/r)*(t-delta));
    past_y = (R - r)*sin(t-delta) - rho*sin(((R-r)/r)*(t-delta));
    stroke(x, y, 121);
    strokeWeight(2);
    line(past_x, past_y, x, y);
      //
      if (rhoSlider.value() != ref_rho | smallSlider.value() != ref_r | bigSlider.value() != ref_R){
        clearLines();
      }

  }





  // translate(-displayWidth/2,-displayHeight/2);
  // text('Rho - Pen point distance from center = ' + rhoSlider.value(),
  //      rhoSlider.x * 2 + rhoSlider.width - displayWidth/2,
  //      35 - displayHeight/2);
  //
  // text('R - Outside wheel radius = ' + bigSlider.value(),
  //      bigSlider.x * 2 + bigSlider.width - displayWidth/2,
  //      55 - displayHeight/2);
  //
  // text('r - Inner wheel radius = ' + smallSlider.value(),
  //     smallSlider.x * 2 + smallSlider.width - displayWidth/2,
  //     75 - displayHeight/2);

  t += delta;
}


function clearLines()
{
  clear();
  t = 0;
  strokeWeight(1);
  stroke(0);
  textSize(15);
  text('Rho - Pen point distance from center = ' + rhoSlider.value(),
       rhoSlider.x * 2 + rhoSlider.width - displayWidth/2,
       35 - displayHeight/2);

  text('R - Outside wheel radius = ' + bigSlider.value(),
       bigSlider.x * 2 + bigSlider.width - displayWidth/2,
       55 - displayHeight/2);

  text('r - Inner wheel radius = ' + smallSlider.value(),
      smallSlider.x * 2 + smallSlider.width - displayWidth/2,
      75 - displayHeight/2);
  draw();
}
