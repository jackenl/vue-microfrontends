const callableMap = new WeakMap();
export function isCallable(fn) {
  if (callableMap.has(fn)) {
    return true;
  }
  const callable = typeof fn === 'function' && typeof fn !== 'undefined';
  if (callable) {
    callableMap.set(fn, callable);
  }
  return callable;
}

const boundedMap = new WeakMap();
export function isBoundedFunction(fn) {
  if (boundedMap.has(fn)) {
    return boundedMap.get(fn);
  }
  const bounded = fn.name.indexOf('bound ') === 0 && !fn.hasOwnProperty('prototype');
  boundedMap.set(fn, bounded);
  return bounded;
}

export function isConstructable(fn) {
  const constructable =
    fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
  return constructable;
}
