const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;

var rand;



var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    image5 = loadImage("ededed.jpg")
    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
   
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //display rain drops
   Rain()

    drawSprites();
}   

function Rain(){
    if (frameCount % 1 === 0){
  /*   aargh = new Raindrop((random(100,400)),100) 
      
       //generate random obstacles
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: aargh.body.position.x = 100
                 aargh.body.position.y = 1
                 break;
         case 2: aargh.body.position.x = 200
                 aargh.body.position.y = 1
                 break;
         case 3: aargh.body.position.x = 300
                 aargh.body.position.y = 1
                 break;
         case 4: aargh.body.position.x = 400
                 aargh.body.position.y = 1
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
      // thunder.scale = 0.5;
   */
var rain = createSprite((random(100,300)),100,10,10)
rain.addImage("rain", image5)
rain.velocityY = 5  
rain.scale = 0.03
    }
   }
