var fixedrect,movingrect

function setup() {
 
 
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 100, 50);
  fixedrect.shapeColor = "red";
  fixedrect.debug = true;
  movingrect = createSprite(400,200,50,100);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  
}

function draw() {
  background(0,0,0);  
  movingrect.x =World.mouseX; 
  movingrect.y = World.mouseY;
  
  if (movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2&& 
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2) {
    
      fixedrect.shapeColor = "black"
    movingrect.shapeColor = "black"  
  }
  else{
movingrect.shapeColor  = "green"
fixedrect.shapeColor = "red"
  }
  drawSprites();
}