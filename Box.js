class Box
{
constructor(x,y,width,height)

{
    var options={
        'restitution':0.8,
        'friction':0.5,
        'density':0.4
    }

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)
this.visibility=255;
 
}

display()
    {
var pos= this.body.position
var angle=this.body.angle  

if(this.body.speed>5){
  World.remove(world,this.body)
  push ();
  
  pop ();
  
}

else{
  rectMode(CENTER)
  rect(pos.x,pos.y,this.width,this.height)
}


    }

}   
