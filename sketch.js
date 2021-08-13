var jaxon;
var jaxon_run;
var edges;
var road;
var road_pic;

function preload(){
  jaxon_run = loadAnimation("Runner-1.png", "Runner-2.png");
  road_pic = loadImage("path.png");
}

function setup(){
  createCanvas(400,600);
  road = createSprite(200, 180, 400, 20);
  road.addImage(road_pic);
  road.velocityY = 5
  
  

  jaxon = createSprite(75, 400, 20, 20);
  jaxon.addAnimation("running", jaxon_run);
  edges = createEdgeSprites()

  jaxon.scale = 0.13
  
}

function draw() {
background("white")

  jaxon.x = World.mouseX
  
  console.log(road.y)

  if(road.y>470){
    road.y = 188
  }

    jaxon.collide(edges)

  drawSprites()
}
