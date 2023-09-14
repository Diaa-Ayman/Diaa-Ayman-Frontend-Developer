export function sliceData(arr, chunkSize, num) {
  const start = chunkSize * num;
  return arr.slice(start, start + num);
}
