
var bin1, bin2, bin3, paper,ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(300, 660, 10, 50);
	bin2 = new Bin(400, 660, 10, 50);
	bin3 = new Bin(350, 670, 100, 10)

	paper = new Paper(30, 200,10 )

	ground1 = new Line(400 , 30 , 800 , 10 );
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
	bin1.display();
	bin2.display();
	bin3.display();

	paper.display();
}



