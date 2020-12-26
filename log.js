class Log extends BaseClass
{
    constructor(x,y,height,angle)
    {
        
        
        
        super(x,y,20,height,angle);//transfers all the properties of the parent to child
        this.image=loadImage("sprites/wood2.png");
        Body.setAngle(this.body,angle);
    }
    display()
    {
           super.display();
    }
}
