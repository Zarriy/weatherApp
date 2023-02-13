export default function TimeConvertor(timeStamp) {
  const date = new Date(timeStamp * 1000);

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const hours24 = date.getHours();
  const minutes = date.getMinutes();

  let hour, meridiem;
  if (hours24 === 0) {
    hour = 12;
    meridiem = "am";
  } else if (hours24 > 12) {
    hour = hours24 - 12;
    meridiem = "pm";
  } else if (hours24 === 12) {
    hour = 12;
    meridiem = "pm";
  } else {
    hour = hours24;
    meridiem = "am";
  }

  return `${month.slice(0, 3)} ${day}, ${hour
    .toString()
    .padStart(2, "0")}:${minutes}${meridiem}`;
}
