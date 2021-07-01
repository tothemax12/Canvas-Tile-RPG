//this file is for creating maps 
const tileSize = 64;

//blank tile class
class tile {

constructor(name, ID, x, y, art) {
this.name = name;
this.ID = ID;   
this.x = x;
this.y = y;
this.art = art;
}

//draws the tile
drawTile = function () {
    ctx.beginPath();
    ctx.rect(this.x, this.y, tileSize, tileSize);
    ctx.fillStyle = this.art;
    ctx.fill();
    ctx.closePath();
    }

}

//defining tiles
let Path = new tile("path", "p", 0, 0, "red");//standard path tile
let Test = new tile("test", "t", 0, 0, "blue");
let Blank = new tile("blank", "b", 0, 0, `rgb(0, 255, 0, 0.5)`);//an invisible tile for formatting the map
let newLine = new tile("newLine", "nL", 0, 0, `rgb(0, 0, 255, 0.5)`);//an invisible tile for shifting the map down one line
let wall = new tile("wall", "w", 0, 0, `rgb(0, 255, 0)`);//a basic wall tile

//this array store all the current types of tiles in the game
let tileObjectDirectory = [Path, Test, Blank, newLine];


function tileSelector(tileID) {
let tileObject;

switch (tileID) {
    case "p":
        tileObject = tileObjectDirectory[0];
        break;
    case "t":
        tileObject = tileObjectDirectory[1];
        break;
    case "b":
        tileObject = tileObjectDirectory[2];
        break;
    case "nL":
        tileObject = tileObjectDirectory[3];
        break;
    }

return tileObject;
}

//takes in a string of tile id's chars and outputs an array of the corresponding tile objects
function initializeTileObjects(tileIDArray) {
let tileObjects = [];
let tileX = 0;
let tileY = 0;

//go through array of ids and put the correct objects in the new array
for (let i = 0; i < tileIDArray.length; i++) {
    tileObjects.push(Object.assign({}, tileSelector(tileIDArray[i])));
}

//assigning the correct cordinates to the tiles
for (let i = 0; i < tileObjects.length; i++) {
    tileObjects[i].x = tileX;
    tileObjects[i].y = tileY;
    tileX += tileSize;

//if it's a new line go down and over
    if (tileObjects[i].ID == "nL") {
        tileX = 0;
        tileY += tileSize;
    }

}

return tileObjects;
}

//main function for creating a map
function createMap(tileIDArray) {

tileObjectArray = initializeTileObjects(tileIDArray);

return tileObjectArray;
}

//function for drawing out the map
function drawMap(map) {

    for (let i = 0; i < map.length; i++) {
    map[i].drawTile();
    }
    
    }