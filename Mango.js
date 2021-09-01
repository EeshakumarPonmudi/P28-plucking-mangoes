class Mango{
    constructor(x, y,radius) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.image = loadImage("mango.png");
        
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = 2;
        World.add(world,this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30,30);
        pop();
    }
}