function split(arr) {
  let middle = Math.floor(arr.length/2);
  let firstArr = arr.slice(0, middle);
  let secondArr = arr.slice(middle);
  return [firstArr, secondArr];
}
