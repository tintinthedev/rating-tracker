export function timestampToDate(timestamp: number) {
  const timestampDate = new Date(timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[timestampDate.getMonth()];
  const date = timestampDate.getDate();
  const time = date + " " + month;

  return time;
}
