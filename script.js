function startGame() {
  myGameArea.start();
  myGameArea.draw(redsquare);
}


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 800;
    this.canvas.height = 600;
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

  switch (levelIndex) {
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
function livello1() {
  myGameArea.draw(goldSquare);

  myGameArea.draw(ost1);
  myGameArea.draw(ost2);
  myGameArea.draw(ost3);
  myGameArea.draw(ost4);
  myGameArea.draw(ost5);
  myGameArea.draw(osto1);
  myGameArea.draw(osto2);
  myGameArea.draw(osto3);



  newBoxCollision(ost1);
  newBoxCollision(ost2);
  newBoxCollision(ost3);
  newBoxCollision(ost4);
  newBoxCollision(ost5);
  newBoxCollision(osto1);
  newBoxCollision(osto2);
  newBoxCollision(osto3);

  collisionWin(goldSquare);

  movimento3(ost1, 10);
  movimento3(ost2, 9);
  movimento3(ost3, 12);
  movimento3(ost4, 8);
  movimento3(ost5, 15)
  movimento4(osto1, 10)
  movimento4(osto2, 13)
  movimento4(osto3, 15)
  


}
function livello2() {

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

function check() {
  if (redsquare.x + hsp < 0) {
    hsp = 0;
  }
  if (redsquare.y + vsp < 0) {
    vsp = 0;
  }
  if (redsquare.x + redsquare.width + hsp > 800) {
    hsp = 0;
  }
  if (redsquare.y + redsquare.height + vsp > 600) {
    vsp = 0;
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
  width: 25,
  height: 25,
  x: 760,
  y: 250,
  color: "gold"
}

//ostacoli
var ost1 = {
  width: 20,
  height: 20,
  x: 320,
  y: 135,
  color: "black",
  border: false
}
var ost2 = {
  width: 20,
  height: 20,
  x: 120,
  y: 135,
  color: "black",
  border: false
}
var ost3 = {
  width: 20,
  height: 20,
  x: 220,
  y: 135,
  color: "black",
  border: false
}
var ost4 = {
  width: 20,
  height: 20,
  x: 400,
  y: 222,
  color: "black",
  border: false
}
var ost5 = {
  width: 20,
  height: 20,
  x: 500,
  y: 222,
  color: "black",
  border: false
}
var osto1 = {
  width: 20,
  height: 20,
  x: 10,
  y: 135,
  color: "black",
  border: false
}
var osto2 = {
  width: 20,
  height: 20,
  x: 10,
  y: 400,
  color: "black",
  border: false
}
var osto3 = {
  width: 20,
  height: 20,
  x: 10,
  y: 570,
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

//gestione collisioni ostacoli
function newBoxCollision(box) {
  let playerWidth = redsquare.x + redsquare.width;
  let playerHeight = redsquare.y + redsquare.height;
  let boxWidth = box.x + box.width;
  let boxHeight = box.y + box.height;

  if (playerHeight > box.y & redsquare.y < boxHeight & redsquare.x < boxWidth) {
    if (playerWidth > box.x) {
      redsquare.x = 10;
      redsquare.y = 10;
    }
  }
  if (playerHeight > box.y & redsquare.y < boxHeight & playerWidth > box.x) {
    if (redsquare.x < boxWidth) {
      redsquare.x = 10;
      redsquare.y = 10;

    }
  }
  if (playerWidth > box.x & redsquare.x < boxWidth & playerHeight > box.y) {
    if (redsquare.y < boxHeight) {

      redsquare.x = 10;
      redsquare.y = 10;
    }
  }
  if (playerWidth > box.x & redsquare.x < boxWidth & redsquare.y < boxHeight) {
    if (playerHeight > box.y) {

      redsquare.x = 10;
      redsquare.y = 10;
    }
  }
}


//collisione vittoria
function collisionWin(box) { //collisioni
  let playerWidth = redsquare.x + redsquare.width;
  let playerHeight = redsquare.y + redsquare.height;
  let boxWidth = box.x + box.width + 5;
  if (playerWidth > box.x & redsquare.x < boxWidth & playerHeight < box.y) {
    redsquare.x = 10;
    redsquare.y = 10;
    alert("Hai vinto!");
  }
}

//movimento verticale ostacoli
function movimento3(ost, spd) {
  if (ost.y >= 0 && ost.border == false) {
    ost.y = ost.y - spd;
  }
  else {
    ost.border = true;
  }
  if (ost.y <= 570 && ost.border == true) {
    ost.y = ost.y + spd;
  }
  else {
    ost.border = false;
  }
}
//movimento orizzontale ostacoli
function movimento4(ost, spd) {
  if (ost.x >= 0 && ost.border == false) {
    ost.x = ost.x - spd;
  }
  else {
    ost.border = true;
  }
  if (ost.x <= 700 && ost.border == true) {
    ost.x = ost.x + spd;
  }
  else {
    ost.border = false;
  }
}


let hsp = 0;
let vsp = 0;

document.addEventListener('keydown', (event) => {

  switch (event.key) {

    case "a":
      hsp = -8;
      break;

    case "d":
      hsp = 8;
      break;

    case "w":
      vsp = -8;
      break;

    case "s":
      vsp = 8;
      break;
  }
}
);

document.addEventListener('keyup', (event) => {

  switch (event.key) {

    case "a":
      hsp = 0;
      break;

    case "d":
      hsp = 0;
      break;

    case "w":
      vsp = 0;
      break;

    case "s":
      vsp = 0;
      break;
  }
}
);


