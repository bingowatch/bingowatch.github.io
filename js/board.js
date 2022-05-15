/**
 * getBoard - generate the tiles for a board
 *
 * @param  {string} difficulty
 * @param  {boolean} ranked=false
 * @param  {size} size
 * @param  {function} random
 * @return {object}
 */
function getBoard(difficulty, ranked=false, size, random) {
  if (size % 2 == 0) size++;
  const n = size * size;

  if (!(difficulty in difficulties)) {
    console.warn(`difficulty "${difficulty}" missing`);
    difficulty = 'normal';
  }

  return expandBoard({
    difficulty,
    size,
    free: nextTile(getFreeSquarePool(), random),
    tiles: getNFromPool(getPool(difficulty, ranked), n-1, random),
  });
}


/**
 * expandTile - get tile details
 *
 * @param  {string} short
 * @return {object}
 */
function expandTile(short) {
  return {
    ...tiles[short],
    short,
    icon: `${short}.png`,
  }
}


/**
 * expandBoard - add 'tiles' section with tile details
 *
 * @param  {object} board
 * @return {type}
 */
function expandBoard(board) {
  return {
    difficulty: board.difficulty,
    size: board.size,
    free: expandTile(board.free),
    tiles: board.tiles.map(tile=>expandTile(tile)),
  }
}


/**
 * buildTable - build 2d array of tiles
 *
 * @param  {object} board
 * @return {array<array<object>>}
 */
function buildTable(board) {
  const size = board.size;
  const free = board.free;
  const tiles = board.tiles;

  const b = (size-1)/2;

  let table = [];
  let n = 0;

  for (let y = -b; y <= b; y++) {
    let row = [];
    table.push(row);
    for (let x = -b; x <= b; x++) {
      if (x === 0 && y === 0) row.push(free)
      else row.push(tiles[n++]);
    }
  }

  return table;
}
