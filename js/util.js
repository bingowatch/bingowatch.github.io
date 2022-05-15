/**
 * @function forEachPlus
 * @param {object|array} arr an array or single item
 * @param {function(item)} cb callback
 */
function forEachPlus(arr, cb) {
  if (Array.isArray(arr)) {
    arr.forEach(cb);
  } else {
    cb(arr, 0, arr);
  }
}

/**
 * @function createElement
 * @param {string} element
 * @param {object} options
 * - 'text' (string)
 * - 'class' (array<string> or string)
 * - 'style' object of string-string
 * - 'child' (array<HTMLElement>) or HTMLElement)
 * - 'parent' HTMLElement
 * - 'events' object of string-function
 * @return {HTMLElement}
 */
function createElement(element, options={}) {
  const el = document.createElement(element ?? 'div');

  if ('text' in options) {
    const textNode = document.createTextNode(options.text);
    el.appendChild(textNode);
  }

  if ('class' in options)
    forEachPlus(options.class, i=>el.classList.add(i));

  if ('attributes' in options)
    for (const [key, value] of Object.entries(options.attributes)) el.setAttribute(key, value);

  if ('style' in options)
    for (const [key, value] of Object.entries(options.style)) el.style[key] = value;

  if ('child' in options)
    forEachPlus(options.child, i=>(!!i)?el.appendChild(i):undefined);

  if ('parent' in options)
    options.parent.appendChild(el);

  if ('events' in options)
    for (const [key, value] of Object.entries(options.events)) el.addEventListener(key, value);

  if ('ready' in options)
    whenHTMLElementReady(el, ()=>options.ready(el));

  return el;
}

/**
 * whenHTMLElementReady - callback when element is ready
 *
 * @param  {HTMLElement} element
 * @param  {function} callback
 */
function whenHTMLElementReady(element, callback) {
  var observer = new MutationObserver(function(mutations) {
   if (document.contains(element)) {
      callback();
      observer.disconnect();
    }
  });

  observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
}

/**
 * updateURL - change the url in place
 *
 * @param  {function(URL)} callback
 */
function replaceURL(callback) {
  const url = new URL(window.location);
  callback(url);
  history.replaceState(null, '', url);
}

/**
 * updateURL - change the url and load it
 *
 * @param  {function(URL)} callback
 */
function updateURL(callback) {
  const url = new URL(window.location);
  callback(url);
  window.location.href = url;
}
