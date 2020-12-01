class Ground{
    constructor(x,y,width,height){
        var groundop={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundop);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(5);
        stroke("Green");
        fill("darkgreen");
        rect(pos.x,pos.y,this.width,this.height);
    }
}