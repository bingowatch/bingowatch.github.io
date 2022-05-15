class State {
  static DELIM = '';

  hash;
  enabled = [];

  constructor(opt, size=24) {
    this.hash = opt.seed + ':' + simpleHash(JSON.stringify(opt));
    this.loadState();
    console.log(this.enabled)
    this.enabled = this.enabled.length
      ? this.enabled
      : (new Array(size+1)).fill('0')
      ;
    this.saveState();
  }

  getKey(key) {
    return `${this.hash}/${key}`;
  }

  getStorage(key) {
    return sessionStorage.getItem(this.getKey(key));
  }

  setStorage(key, value) {
    return sessionStorage.setItem(this.getKey(key), value);
  }

  loadState() {
    console.log(this.getStorage('enabled'));
    this.enabled = (this.getStorage('enabled') ?? '').split(State.DELIM);
  }

  saveState() {
    this.setStorage('enabled', this.enabled.join(State.DELIM));
  }

  get(n) {
    return (this.enabled[n] ?? '0') == '1'
  }

  set(n, enable) {
    if (n > this.enabled.length-1) this.data += ('0').repeat(n-this.enabled.length);
    this.enabled[n] = !enable? '0':'1';
    this.saveState();
  }
}
