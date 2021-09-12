class Raindrop{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, width, height);
        this.smokeImage = loadImage("ededed.jpg")
        this.setPreferredSize(new Dimension(200, 200));
        this.trajectory = [];
      }
    
      display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
             var position = [this.body.position.x, this.body.position.y];
             this.trajectory.push(position);
        
       
        for(var i = 0; i < this.trajectory.length; i++){
          image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1]);
        }
        imageMode(CENTER);
        image(this.smokeImage, 0, 0, this.width, this.height);
        this.smokeImage.scale = 0.05
      }
    }