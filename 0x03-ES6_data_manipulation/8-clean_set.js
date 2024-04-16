export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string' || typeof set !== 'object' || !set || !set.size) {
    return '';
  }

  return [...set].filter((value) => value.startsWith(startString)).map((value) => value.slice(startString.length)).join('-');
}
