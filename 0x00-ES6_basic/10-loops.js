export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (let value of array) {
    value = appendString + value;
    array[i++] = value;
  }

  return array;
}
