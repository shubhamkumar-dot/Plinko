class Particle{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.4,
            density:1,
            friction:1
        }
        this.body = Bodies.circle(x,y,10);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("green");
        ellipse(0,0,this.radius);
        pop();
    }
}