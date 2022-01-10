function startGame() {
  myGameArea.start();
  myGameArea.draw(redsquare);
}


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 300;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  draw: function (component) {
    this.context.fillStyle = component.color;
    this.context.fillRect(component.x, component.y, component.width, component.height);
  },

  clear: function () {
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

  }
}
let levelIndex = 1;
function updateGameArea() {
  myGameArea.clear();
  myGameArea.draw(redsquare);

  switch (levelIndex){
    case 1:
      livello1();
      break;
    case 2:
      livello2();
      break;
  }


  check();
  redsquare.x += hsp;
  redsquare.y += vsp;
}
function livello1(){
  myGameArea.draw(goldSquare);

  myGameArea.draw(ost1);
  myGameArea.draw(ost2);
  myGameArea.draw(ost3);

  newBoxCollision(ost1);
  newBoxCollision(ost2);
  newBoxCollision(ost3);

  collisionWin(goldSquare);

  movimento3(ost1, 7);
  movimento3(ost2, 5);
  movimento3(ost3, 6);

}
function livello2(){

  myGameArea.draw(l2ost1);
  newBoxCollision(l2ost1);
  movimento3(l2ost1, 7);

  myGameArea.draw(l2ost2);
  newBoxCollision(l2ost2);
  movimento3(l2ost2, 5);

  myGameArea.draw(l2ost3);
  newBoxCollision(l2ost3);
  movimento3(l2ost3, 6);
}

function check(){
  if (redsquare.x + hsp<0){
    hsp =0;
  }
  if (redsquare.y + vsp<0){
    vsp =0;
  }
  if (redsquare.x + redsquare.width + hsp> 500){
    hsp =0;
  }
  if (redsquare.y + redsquare.height + vsp> 300){
    vsp =0;
  }
}

var redsquare = {
  width: 20,
  height: 20,
  x: 10,
  y: 10,
  color: "red"
}
var goldSquare = {
  width: 15,
  height: 15,
  x: 470,
  y: 135,
  color: "gold"
}

//ostacoli
var ost1 = {
  width: 25,
  height: 25,
  x: 320,
  y: 135,
  color: "black",
  border: false
}
var ost2 = {
  width: 25,
  height: 25,
  x: 120,
  y: 135,
  color: "black",
  border: false
}
var ost3 = {
  width: 25,
  height: 25,
  x: 220,
  y: 135,
  color: "black",
  border: false
}

var l2ost1 = {
  width: 25,
  height: 25,
  x: 260,
  y: 105,
  color: "black",
  border: false
}
var l2ost2 = {
  width: 25,
  height: 25,
  x: 220,
  y: 105,
  color: "black",
  border: false
}

var l2ost3 = {
  width: 25,
  height: 25,
  x: 120,
  y: 105,
  color: "black",
  border: false
}



function newBoxCollision(box){
  let playerWidth = redsquare.x + redsquare.width;
  let playerHeight = redsquare.y + redsquare.height;
  let boxWidth = box.x + box.width;
  let boxHeight = box.y + box.height;

  if (playerHeight > box.y & redsquare.y < boxHeight & redsquare.x < boxWidth){
     if (playerWidth > box.x){
       redsquare.x = 10;
       redsquare.y = 10;
      }
  }
  if (playerHeight > box.y & redsquare.y < boxHeight & playerWidth > box.x){
      if (redsquare.x < boxWidth){
        redsquare.x = 10;
        redsquare.y = 10;
       
      }
  }
  if (playerWidth > box.x & redsquare.x < boxWidth & playerHeight > box.y){
      if (redsquare.y < boxHeight){
        
       redsquare.x = 10;
       redsquare.y = 10;
      }
  }
  if (playerWidth > box.x  & redsquare.x < boxWidth & redsquare.y < boxHeight ){
      if (playerHeight > box.y){
        
       redsquare.x = 10;
       redsquare.y = 10;
      }
  }    
}
function collisionWin(box) { //collisioni
  let playerWidth = redsquare.x + redsquare.width;
  let playerHeight = redsquare.y + redsquare.height;
  let boxWidth = box.x + box.width + 5;
  if (playerWidth > box.x  & redsquare.x < boxWidth  & playerHeight > box.y ){
    levelIndex++;
    alert("Hai vinto!");
  }
}


function movimento3(ost, spd) {
  if (ost.y>=0 && ost.border==false) {
    ost.y=ost.y-spd;
  }
  else {
    ost.border=true;
  }
  if (ost.y<=270 && ost.border==true) {
    ost.y=ost.y+spd;
  }
  else {
    ost.border=false;
  }
}

let hsp = 0;
let vsp = 0;

document.addEventListener('keydown', (event) => {
    
      switch(event.key) {

          case "a":
            hsp =-5;
          break;
          
          case "d":
            hsp =5;
          break;

          case "w":
            vsp =-5;
          break;

          case "s":
            vsp = 5;
          break;
      }
  }
);

document.addEventListener('keyup', (event) => {
    
  switch(event.key) {

      case "a":
        hsp =0;
      break;
      
      case "d":
        hsp =0;
      break;

      case "w":
        vsp =0;
      break;

      case "s":
        vsp = 0;
      break;
  }
}
);







