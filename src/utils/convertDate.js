export function convertUTCtoLocal(utcDateTime) {
  const date = new Date(utcDateTime);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const localDateTime = date.toLocaleString("en-US", options);
  return localDateTime;
}
