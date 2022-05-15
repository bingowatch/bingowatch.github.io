/**
 * @function renderTile - turn tile descriptor into html element
 * and initalize scripts for it
 *
 * @param  {object} tile tile descriptor
 * @param  {boolean} enabled does it glow
 * @param  {function(enabled)} storeEnabled callback to save state of this tile
 * @return {HTMLElement}
 */
function renderTile(tile, enabled, storeEnabled) {
  const shrink = 6; // pt
  const factor = 0.33;
  const baseSize = 24;
  const maxDetailsSize = 32; // pt

  function enableAnimation(el) {
    // hold the :hover style for a bit
    // solves a conflict between animation-enable animation and hover transition
    setTimeout(()=>el.classList.remove('hold'), 200);
    el.classList.add('hold');

    const animationEnd = () => {
      el.removeEventListener('animationend', animationEnd);
      clearTimeout(el.animationEndTimeout);
      el.animationEndTimeout = setTimeout(()=>el.classList.remove('animation-enable'), 0);
    }

    // play the animation
    el.addEventListener('animationend', animationEnd); // disable animation class when animation ends
    el.classList.add('animation-enable');
  }

  let content;
  let titleContainer
  let el;
  return el = createElement('td', {
    child: createElement('div', {
      class: 'tile-container',
      child: content = createElement('div', {
        class: 'tile-content',
        child: [
          titleContainer = createElement('div', {
            class: 'tile-title-container',
            child: createElement('div', {
              class: 'tile-title-content',
              text: tile.name,
              ready: (titleContent) => {
                const size = fillText(titleContent, titleContainer, 12, 80)-shrink;
                const calcSize = (baseSize*factor) + size*(1-factor);
                titleContent.style.fontSize = null;
                titleContent.style.setProperty('--calc-size', `${calcSize}pt`);
                setTimeout(0, ()=>titleContent.classList.add('transition'));
              },
            }),
          }),
          createElement('div', {
            class: 'tile-description',
            text: tile.description,
          }),
        ],
        ready: () => {
          if (enabled) content.classList.add('enable');
        },
        events: {
          click: () => {
            content.classList.toggle('enable');
            storeEnabled(content.classList.contains('enable'));
            if (content.classList.contains('enable')) {
              enableAnimation(el);
            }
          },
        },
      }),
    }),
  });
}


/**
 * renderHTML - renders the bingo card html element
 *
 * @return {HTMLElement}
 */
function renderHTML() {
  const opt = getInitializedOptions();
  const random = getSeededRandom(opt.seed);
  const board = getBoard(opt.difficulty, opt.ranked, opt.size, random);
  const cells = buildTable(board);
  const state = new State(opt, board.tiles.length);

  const table = createElement('table', {
    class: ['card'],
  });

  const wrapper = createElement('div', {
    class: ['wrapper'],
    child: table,
  });

  const headAttributes = {colspan: opt.size};

  const head = createElement('thead', {
    parent: table,

    child: createElement('tr', {
      child: createElement('th', {
        attributes: headAttributes,
        child: createElement('a', {
          class: 'cleareffects',
          attributes: {
            'href': '/index.html',
          },
          child: createElement('div', {
            child: [
              createElement('span', {
                text: `${opt.ranked ? 'competitive':'quickplay'}`,
                class: 'subtitle',
              }),

              createElement('span', {
                text: 'Bingowatch',
                class: ['title', 'text-glow'],
              }),

              createElement('span', {
                text: `${opt.difficulty}`,
                class: 'subtitle',
              }),
            ],
          })
        }),
      }),
    }),
  });

  let n = 0;
  const body = createElement('tbody', {
    parent: table,
    child: cells.map(row=>createElement('tr', {
      child: row.map(cell=>{
        const id = n++;
        return renderTile(cell, state.get(id), (enabled)=>state.set(id, enabled));
      }),
    })),
  });

  function resize() {
    let widthOutput = window.innerWidth;
    let heightOutput = window.innerHeight;

    var scale = Math.min(
      widthOutput / table.offsetWidth,
      heightOutput / table.offsetHeight
    );

    table.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  window.addEventListener('resize', resize);
  whenHTMLElementReady(wrapper, resize);

  return wrapper;
}
