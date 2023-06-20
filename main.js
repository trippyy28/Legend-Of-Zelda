import Character from "./Character.js";
import { drawMap, map7_7 } from "./Map.js";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let gameState = "menu";
let spriteWidth, spriteHeight, spriteX, spriteY;
let startM = new Image();
let numSprites = 2240 / 224;
let spriteCounter = 0;
let frameCounter = 0;
startM.src = "/assets/menu-sprite.png";
startM.onload = function () {
  // dimensions of each sprite
  spriteWidth = 224;
  spriteHeight = 224;

  // coordinates of the sprite you want to draw within the sprite sheet
  spriteX = 0; // for the first sprite, this would be 0
  spriteY = 0; // for the first sprite, this would be 0
  startGame();
};
let keys = {
  ArrowLeft: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
};

document.addEventListener(
  "keydown",
  function (e) {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
    if (e.key === "Enter") {
      gameState = "play";
    }
  },
  false
);

document.addEventListener("keyup", function (e) {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
  link.stop();
});
document.body.style.zoom = "220%";
let fps = 60;
let worldTiles = new Image();
worldTiles.src = "/assets/tiles-overworld.png";
let link1 = new Image();
link1.src = "/assets/sprite.png";
let linkY = 135;
let linkX = 116;

let link = new Character(linkX, linkY, link1, 1);

function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = "rgb(20,20,20)";
  ctx.fillRect(0, 0, 256, 240);
  if (gameState === "menu") {
    let spriteX = (spriteCounter % numSprites) * spriteWidth;
    let canvasX = 0;
    let canvasY = 0;

    ctx.drawImage(
      startM,
      spriteX,
      spriteY,
      spriteWidth,
      spriteHeight,
      canvasX,
      canvasY,
      spriteWidth,
      spriteHeight
    );
    if (frameCounter % 10 === 0) {
      // only increment spriteCounter every 10 frames
      spriteCounter++;
    }
    frameCounter++;
  } else if (gameState === "play") {
    if (keys.ArrowLeft) link.move("left", map7_7);
    if (keys.ArrowRight) link.move("right", map7_7);
    if (keys.ArrowUp) link.move("up", map7_7);
    if (keys.ArrowDown) link.move("down", map7_7);
    drawMap(map7_7, ctx, worldTiles);
    link.draw(ctx);
  }
}
draw();
