//this is the function that will draw everything out
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

//defining a map
let testMap = createMap(["p", "nL", "t", "p", "p", "p", "p", "p", "p",
                         "p", "p", "p", "p", "t", "t", "t", "nL", "t", "b"]);

let firstMap = createMap(["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "p", "p", "p", "p", "p", "p", "p", "p", "t", "nL",
                          "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "nL",
                        ]);

let checkerBoard = createMap(["t", "p", "t", "p", "t", "p", "t", "p", "t", "p"]);

let currentMap = firstMap;



function draw() {

}

//makes a grid overlay for debugging
function drawGrid() {
  //drawing "sprite" for debugging
  ctx.beginPath();
  ctx.rect(c.width/2-tileSize, c.height/2-tileSize, tileSize, tileSize);
  ctx.fillStyle = "lime";
  ctx.fill();
  ctx.closePath();

  // for (let i = 0; i < 640; i += tileSize) {
  //   for (let j = 0; j < 640; j += tileSize) {
  //     ctx.beginPath();
  //     ctx.strokeRect(i, j, tileSize, tileSize);
  //     ctx.closePath();
  //   }
  // }
}

setInterval(drawGrid, 20);
drawMap(currentMap);
