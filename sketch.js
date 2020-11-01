var x = 240
var y = 260
var y1 = 315
var y2 = 370
var largura = 210
var altura = 50
var mouseX
var tela = 0


let img;
let img2;
let img3;
function preload() {
  img = loadImage('menu.png');
  img2 = loadImage('instrução.png');
  img3 = loadImage('créditos.png');
}

function setup() {
  createCanvas(600,600)
}

function draw() {
  background(220);
  menu()
  jogo()
  instruções()
  créditos()
}
function menu(){
  image(img,0,0)
  fill(0);
  textSize(40);
  textFont('Georgia');
  text('Jogo', 300, 295);
  fill(0);
  textSize(40);
  textFont('Georgia');
  text('Instruções', 255, 350);
  fill(0);
  textSize(40);
  textFont('Georgia');
  text('Créditos', 280, 410);
  
   
  
   if(mouseX > x && mouseX < x+largura && mouseY > y && mouseY < y+altura){
     noFill();
      stroke('#fae');
    strokeWeight(4);
    rect(x, y, largura, altura);
    if(mouseIsPressed){
      tela = 1
    }
  }  
  
  if(mouseX > x && mouseX < x+largura && mouseY > y1 && mouseY < y1+altura){
    noFill();
    rect(x, y1, largura, altura);
    if(mouseIsPressed){
      tela = 2
    }
  } 
   
  if(mouseX > x && mouseX < x+largura && mouseY > y2 && mouseY < y2+altura){
    if(mouseIsPressed){
      tela = 3
    }
    noFill();
    rect(x, y2, largura, altura);
  }
  
}

function jogo(){
  if(  tela == 1){
   background(150);
  }
   
  }
function instruções(){
 if(tela == 2){
    background(100)
    image(img2,0,0)
  }
}
function créditos(){
  if(tela == 3){
    background(10)
    image(img3,0,0)
  }
}
function keyPressed(){
  if(key == 'Escape'){
    tela = 0
  }
}
