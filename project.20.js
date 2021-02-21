var tom,tomImg1,jerry,jerryImg1;
var backGround,backGroundImg;
var tomImg2,tomImg3,tomImg4;
var jerryImg2,jerryImg3,jerryImg4;

function preload() {
    //load the images here
  tomImg1 = loadAnimation("cat1.png");
  tomImg2 = loadAnimation("cat2.png");
  tomImg3 = loadAnimation("cat3.png");
  tomImg4 = loadAnimation("cat4.png");
  jerryImg1 = loadAnimation("mouse1.png");
  jerryImg2 = loadAnimation("mouse2.png");
  jerryImg3 = loadAnimation("mouse3.png");
  jerryImg4 = loadAnimation("mouse4,png");
  backGroundImg = loadImage("garden.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(750,400,20,20);
    tom.addAnimation(tomImg1);
    tom.scale = 0.7;

    jerry = createSprite(350,400,20,20);
    jerryImg.addAnimation(jerryImg1);
    jerry.scale = 0.5;

    backGround = createSprite(0,0,1000,800);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        jerry.changeAnimation(jerryImg4);
        tom.changeAnimation(tomImg4);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("catRunning",tomImg2);
      tom.changeAnimation("catRunning");
  }


}
