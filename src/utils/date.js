export function convertSecondsToDate(seconds) {
  const date = new Date(seconds * 1000);
  return date.toUTCString();
}