class Box{

    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var adil=this.body.position;
        rectMode(CENTER);
        fill("skyblue");
        rect(adil.x,adil.y,this.width,this.height);
    }

}