import dayjs from "dayjs";

export const postedWithinToDays = (range: string): number => {
  switch (range) {
    case "day":
      return 1;
    case "week":
      return 7;
    case "2weeks":
      return 14;
    case "month":
      return 30;
    default:
      return 1000;
  }
};

export const parsePostDateText = (text: string): Date => {
  const now = dayjs();

  if (text.includes("hour")) {
    const hours = parseInt(text) || 1;
    return now.subtract(hours, "hour").toDate();
  }

  if (text.includes("minute")) {
    const mins = parseInt(text) || 30;
    return now.subtract(mins, "minute").toDate();
  }

  if (text.includes("day")) {
    const days = parseInt(text) || 1;
    return now.subtract(days, "day").toDate();
  }

  if (text.includes("week")) {
    const weeks = parseInt(text) || 1;
    return now.subtract(weeks * 7, "day").toDate();
  }

  if (text.includes("month")) {
    const months = parseInt(text) || 1;
    return now.subtract(months * 30, "day").toDate();
  }

  // fallback
  return now.subtract(90, "day").toDate();
};
