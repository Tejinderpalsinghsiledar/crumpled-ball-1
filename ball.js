class box{
  constructor(x,y,width,height){
      var options={
       restitution:0
      }
      this.body=Bodies.circle(x,y,width,height,options)
      this.width=width
      this.height=height
      World.add(world,this.body)

  }
  display(){
      var pos =this.body.position
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      angleMode(RADIANS)
      rotate(angle)
      fill("green")
      ellips(0,0,this,radius)
      pop()
  }
}


