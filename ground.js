class Ground extends BaseClass
{
    constructor(x,y,width,height)
    {
        
        super(x,y,width,height,{isStatic:true});
        this.image=loadImage("sprites/base.png");
    }
    display()
    {
       // this.body.position.x=mouseX;
        //this.body.position.y=mouseY;
        super.display();
    }

        
      // text(mouseX+ "," + mouseY,mouseX,mouseY);
    //}
}
// class Ground
// {
//     constructor(x,y,width,height)
//     {
//         var options={
//                     isStatic:true,
//                     }
//         this.body=Bodies.rectangle(x,y,width,height,options)
//         this.width=width;
//         this.height=height;
//         this.image=loadImage("sprites/base.png");
//         World.add(myWorld,this.body);
//     }
//     display()
//     {
//         var pos=this.body.position;
//         imageMode(CENTER);
//         image(this.image,pos.x,pos.y,this.width,this.height);
//     }


// }