/**
 * fillText - set font size of element to fit to a container
 *
 * @param  {HTMLElement} element        element to resize
 * @param  {HTMLElement} container      fixed size container
 * @param  {number|undefined} min = 4   min font-size
 * @param  {number|undefined} max = 80  max font-size
 * @param  {number|undefined} N = 8     number of iterations
 * @param  {number|undefined} e = 1     error tolerance (in pixels)
 * @returns {number}                    final font size
 */
function fillText(element, container, min = 4, max = 80, N = 8, e = 1) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const width = ()=>element.offsetWidth;
  const height = ()=>element.offsetHeight;
  const setFontSize = (size)=>element.style.fontSize = `${Math.max(Math.floor(size), 1)}pt`;
  const sizeError = ()=>Math.abs(width() - containerWidth) + Math.abs(height() - containerHeight);
  const testFit = ()=>Math.ceil(width()) > Math.floor(containerWidth) || Math.ceil(height()) > Math.floor(containerHeight);

  function iteration(n=1) {
    const next = (min + max) / 2;
    setFontSize(next);

    if (testFit()) {
      [min, max] = [min, next];
    } else {
      [min, max] = [next, max];
      if (sizeError() < e) return next;
    }

    if (n >= N) return next;
    return iteration(++n);
  }

  return iteration();
}
