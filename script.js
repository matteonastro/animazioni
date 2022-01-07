function startGame() {
  myGameArea.start();
  myGameArea.draw(redSquare);
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

function updateGameArea() {
  myGameArea.clear();
  myGameArea.draw(redSquare);
  myGameArea.draw(goldSquare);

  myGameArea.draw(ost1);
  myGameArea.draw(ost2);
  myGameArea.draw(ost3);

  collision(ost1);
  collision(ost2);
  collision(ost3);

  collisionWin(goldSquare);

  movimento1();
  movimento2();
  movimento3();
}

var redSquare = {
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
  color: "black"
}
var ost2 = {
  width: 25,
  height: 25,
  x: 120,
  y: 135,
  color: "black"
}
var ost3 = {
  width: 25,
  height: 25,
  x: 220,
  y: 135,
  color: "black"
}

function up() {
  if (redSquare.y>=10) {
    redSquare.y -= 10;
  }
}
function down() {
  if (redSquare.y<=270) {
    redSquare.y += 10;
  }
}
function left() {
  if (redSquare.x>=10) {
    redSquare.x -= 10;
  }
}
function right() {
  if (redSquare.x<=470) {
    redSquare.x+= 10;
  }
}

function collision(box) { //collisioni
  let playerWidth = redSquare.x + redSquare.width;
  let playerHeight = redSquare.y + redSquare.height;
  let boxWidth = box.x + box.width + 5;

  if (playerWidth > box.x  & redSquare.x < boxWidth  & playerHeight > box.y ){
    location.reload();
    alert("Hai perso!");
  }
}
function collisionWin(box) { //collisioni
  let playerWidth = redSquare.x + redSquare.width;
  let playerHeight = redSquare.y + redSquare.height;
  let boxWidth = box.x + box.width + 5;

  if (playerWidth > box.x  & redSquare.x < boxWidth  & playerHeight > box.y ){
    location.reload();
    alert("Hai vinto!");
  }
}

let border=false;

function movimento1() {
  if (ost1.y>=0 && border==false) {
    ost1.y=ost1.y-6;
  }
  else {
    border=true;
  }
  if (ost1.y<=270 && border==true) {
    ost1.y=ost1.y+6;
  }
  else {
    border=false;
  }
}

let border2=false;

function movimento2() {
  if (ost2.y>=0 && border2==false) {
    ost2.y=ost2.y-4;
  }
  else {
    border2=true;
  }
  if (ost2.y<=270 && border2==true) {
    ost2.y=ost2.y+4;
  }
  else {
    border2=false;
  }
}

let border3=false;

function movimento3() {
  if (ost3.y>=0 && border3==false) {
    ost3.y=ost3.y-5;
  }
  else {
    border3=true;
  }
  if (ost3.y<=270 && border3==true) {
    ost3.y=ost3.y+5;
  }
  else {
    border3=false;
  }
}






