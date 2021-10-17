class Snowflake {
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.2,
            'friction' : 0.3,
            'density' : 0.3
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ImageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        rect(0, 0, this.width, this.height);
        pop();
    }
}