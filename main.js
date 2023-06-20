import Character from "./Character.js";
import { drawMap, map7_7 } from "./Map.js";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let gameState = "menu";
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
let startM = new Image();
startM.src = "/assets/menu.png";
let linkY = 135;
let linkX = 116;

let link = new Character(linkX, linkY, link1, 1);

function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = "rgb(20,20,20)";
  ctx.fillRect(0, 0, 256, 240);
  if (gameState === "menu") {
    ctx.drawImage(startM, 0, -20, 1000, 1000);
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
