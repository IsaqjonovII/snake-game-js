const GRID_WIDTH_SIZE = 40;
const GRID_HEIGHT_SIZE = 22;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_WIDTH_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_HEIGHT_SIZE) + 1,
  };
}

export function outSideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_WIDTH_SIZE ||
    position.y < 1 ||
    position.y > GRID_HEIGHT_SIZE
  );
}
