export function keyDownHandler(e, link) {
  switch (e.keyCode) {
    case 37:
      link.move("left", map7_7);
      break;
    case 39:
      link.move("right", map7_7);
      break;
    case 38:
      link.move("up", map7_7);
      break;
    case 40:
      link.move("down", map7_7);
      break;
  }
}
