import dayjs from "dayjs";

export const manipulateDate = (date) => {
  const now = dayjs();
  let history = date;
  if (history.isAfter(now)) {
    // today's YYYY-MM-DD
    history = history
      .set("date", now.date())
      .set("month", now.month())
      .set("year", now.year());
    history = history.set("day", date.day());
    if (history.isAfter(now)) {
      history = history.subtract(1, "week");
    }
  }
  return history;
};
