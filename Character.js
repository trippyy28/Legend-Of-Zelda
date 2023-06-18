import { collision } from "./Map.js";
export default class Character {
  constructor(x, y, image, speed) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.speed = speed;
    this.direction = "up";
    this.animationCounter = 0;
    this.currentAnimation = 0;
    this.moving = false;
    this.animationFrameDelay = 0;
  }

  draw(ctx) {
    switch (this.direction) {
      case "left":
        ctx.drawImage(
          this.image,
          30,
          this.currentAnimation * 30,
          16,
          16,
          this.x,
          this.y,
          16,
          16
        );
        break;
      case "right":
        ctx.drawImage(
          this.image,
          91,
          this.currentAnimation * 30,
          16,
          16,
          this.x,
          this.y,
          16,
          16
        );
        break;
      case "up":
        ctx.drawImage(
          this.image,
          62,
          this.currentAnimation * 30,
          16,
          16,
          this.x,
          this.y,
          16,
          16
        );
        break;
      case "down":
        ctx.drawImage(
          this.image,
          0,
          this.currentAnimation * 30,
          16,
          16,
          this.x,
          this.y,
          16,
          16
        );
        break;
    }
    // Removed the duplicate animationCounter increment

    if (this.moving) {
      this.animationCounter++;
      if (this.animationCounter >= 6) {
        this.currentAnimation = this.currentAnimation > 0 ? 0 : 1;
        this.animationCounter = 0;
      }
    } else {
      this.currentAnimation = 0;
    }
  }

  move(direction, map) {
    this.moving = true;
    if (
      !collision(
        this.x +
          this.speed *
            (direction == "right" ? 1 : direction == "left" ? -1 : 0),
        this.y +
          this.speed * (direction == "down" ? 1 : direction == "up" ? -1 : 0),
        map
      )
    ) {
      switch (direction) {
        case "left":
          this.x -= this.speed;
          break;
        case "right":
          this.x += this.speed;
          break;
        case "up":
          this.y -= this.speed;
          break;
        case "down":
          this.y += this.speed;
          break;
      }
      this.direction = direction;
    }
  }
  stop() {
    this.moving = false;
  }
}
