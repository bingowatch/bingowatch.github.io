
/**
 * getRenderOptions - get options from the query string
 *
 * @return {object}
 */
function getRenderOptions() {
  const param = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  return {
    difficulty: param.difficulty ?? 'normal',
    size: parseInt(param.size ?? '5'),
    ranked: (param.ranked ?? 'false') === 'true',
    seed: param.seed,
  };
}

function getInitializedOptions() {
  if (!getRenderOptions().seed) getNewSeed(true);
  return getRenderOptions();
}

const sample = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * getRandomSeed - get a random string
 *
 * @param  {number|undefined} n=32 length
 * @return {string}
 */
function getRandomSeed(n=32) {
  const data = new Uint8Array(n);
  const result = []
  window.crypto.getRandomValues(data);
  for (x of data) {
    result.push(sample[x%sample.length]);
  }
  return result.join('');
}

/**
 * getNewSeed - get a new seed and apply it to the url bar
 *
 * @param  {type} redirect = false should the url be changed in place? (otherwise the page will reload)
 */
function getNewSeed(inplace = false) {
  const set = (inplace)? replaceURL : updateURL;
  const url = url=>url.searchParams.set('seed', getRandomSeed());
  set(url);
}

/**
 * @function simpleHash - insecure hash
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};
