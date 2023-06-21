class Boat {
  //5. adicionar a animação como parametro
  constructor(x, y, width, height, boatPos, boatAnimation) {
  
    //6.Acrescentar the animation here to the body e adicionar a propiedade speed
    this.animation = boatAnimation;
    this.speed = 0.5;

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    
    //this.image = loadImage("./assets/boat.png");

  

    World.add(world, this.body);
  }

  //7.make a function call animate para definir a velocidade que as animações apppers
  animate(){
  this.speed += 0.07;
  }

  remove(index) {
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    //8.criar uma variavel com nome de index que usaremos para percorrer as animações
  var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //9.alterar a função image para adicionar a animação
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  } 
}
