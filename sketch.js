
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	boy = createSprite(100, 540, 200, 200);
	boy.addImage(boyimg);
	boy.scale = 0.08;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(200, 200);
	tree = new Tree(600, 450, 0.1, 0.1);
	mango1 = new Mango(495, 350, 10);
	mango2 = new Mango(525, 420 - 50, 10);
	mango3 = new Mango(540, 370 - 50, 10);
	mango4 = new Mango(575, 400 - 50, 10);
	mango5 = new Mango(590, 350 - 50, 10);
	mango6 = new Mango(625, 330 - 50, 10);

	chain = new Chain(stone.body,{x:50,y:500})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
	stone.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	chain.display();
	//chain.attach(stone.body);
	detectcollision(stone, mango1);
	detectcollision(stone, mango2);
	detectcollision(stone, mango3);
	detectcollision(stone, mango4);
	detectcollision(stone, mango5);
	detectcollision(stone,mango6);
	
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}
function detectcollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.radius + lstone.radius) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 235, y: 420 })
		chain.attach(stone.body);
	}
}



