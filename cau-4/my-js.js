let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

function Cercle(x,y,radius,color) {
    this.x = x ;
    this.y = y ;
    this.radius = radius;
    this.color = color ;

    this.drawCercle = function () {
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}
let cercle = new Cercle(10,10,100,"#000000");
cercle.drawCercle();