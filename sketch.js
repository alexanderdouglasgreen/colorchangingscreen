var ball 
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = createSprite (325,325,30,30);
}

function draw() 
{
  background(30);
  background ("white");
  drawSprites ()
  if(keyIsDown(UP_ARROW)){
  ball.y = ball.y - 4 
  background ("red");
  }
  if(keyIsDown(DOWN_ARROW)){
  ball.y = ball.y + 4
  background ("orange");
  }
  if(keyIsDown(LEFT_ARROW)){
  ball.x = ball.x - 4
  background ("yellow");
  }
  if(keyIsDown(RIGHT_ARROW)){
  ball.x = ball.x + 4
  background ("green");
  }
}




