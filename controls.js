window.addEventListener('keydown', controls);

const up = 0;
const down = 1;
const left = 2;
const right = 3;

let speed = 10;

function controls(key) {
    //alert(key.keyCode);
    
    switch (key.keyCode) {
    case 87:
    //alert("up arrow");
    moveMap(down);
    break;
    case 65:
        //alert("left arrow");
        moveMap(right);
        break;
        case 68:
            //alert("right arrow");
            moveMap(left);
            break;
            case 83:
                //alert("down arrow");
                moveMap(up);
                break;
    }
}

function moveMap(direction) {
    switch (direction) {
        case up:

            for (let i = 0; i < currentMap.length; i++) {//change cord for each tile in array
                //currentMap[i].y -= tileSize;
                currentMap[i].y -= tileSize;
                ctx.clearRect(0, 0, 1000, 1000);
                drawMap(currentMap);
              }

                console.log(`testMap x = ${currentMap[5].x}`);
            break;
            case down:
                for (let i = 0; i < currentMap.length; i++) {
                    currentMap[i].y += tileSize;
                    ctx.clearRect(0, 0, 1000, 1000);
                    drawMap(currentMap);
                    }
                    console.log(`testMap x = ${currentMap[5].x}`);
                break;
                case left:
                    for (let i = 0; i < currentMap.length; i++) {
                        currentMap[i].x -= tileSize;
                        ctx.clearRect(0, 0, 1000, 1000);
                        drawMap(currentMap);
                        }
                        console.log(`testMap x = ${currentMap[5].x}`);
                    break;
                    case right:
                        for (let i = 0; i < currentMap.length; i++) {
                            currentMap[i].x += tileSize;
                            ctx.clearRect(0, 0, 1000, 1000);
                            drawMap(currentMap);
                            }
                            console.log(`testMap x = ${currentMap[5].x}`);
                        break;
    }
}