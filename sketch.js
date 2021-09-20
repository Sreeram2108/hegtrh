var hasDocked = false;
function preload(){
  bg= loadImage("Docking-undocking/Docking-undocking/spacebg.jpg");
  issimg = loadImage("Docking-undocking/Docking-undocking/iss.png");
  scimg = loadImage("Docking-undocking/Docking-undocking/spacecraft1.png");
  scimg1 = loadImage("Docking-undocking/Docking-undocking/spacecraft2.png");
  scimg2= loadImage("Docking-undocking/Docking-undocking/spacecraft3.png");
  scimg3= loadImage("Docking-undocking/Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
 sc= createSprite(400, 200, 50, 50);
 sc.addImage(scimg)
 sc.scale=0.15
 iss= createSprite(330,130, 50, 50);
 iss.addImage(issimg)
 iss.scale=0.35
}

function draw() {
  background(bg);
  if(!hasDocked){
  if(keyDown("UP_ARROW")){
    sc.y = sc.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    sc.addImage(scimg3);
      sc.x = sc.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    sc.addImage(scimg2);
      sc.x = sc.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
    sc.addImage(scimg1);
  }
  }
  if(sc.y <= (iss.y+70) && sc.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}