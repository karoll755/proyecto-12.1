var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
path.addImage("path.png");
  //loadAnimation de boy (niño)
 boy.addImage("jake1.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(200,180,400,400);
//agregar imagen de path
path.addImage("path.png",pathImage);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;
path.y = path.width /2;
path.velocityY = -4;
//crear sprite de boy (niño)
boy = createSprite(250,20,58,45);
//agregar animación para boy
boy.scale=0.08;
boy.addImage("jake1.png",boyImage);
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
invisibleleftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
invisiblerightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.MouseX = 4
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.bounceOff(leftBoundary);
  boy.bounceOff(rightBoundary);
  boy.bounceOff(invisiblerightBoundary);
  boy.bounceOff(invisibleleftBoundary);
 
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
