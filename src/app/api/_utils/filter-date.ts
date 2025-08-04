import dayjs from "dayjs";

export const getDateFromRelativeTime = (relativeTime: string) => {
  try {
    const now = new Date();

    // Normalize string
    const input = relativeTime.trim().toLowerCase();

    // Regex to capture number and unit
    const match = input.match(
      /(\d+)\s*(min|minute|minutes|hour|hours|day|days|month|months|year|years)/
    );

    if (!match) return new Date();

    const amount = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
      case "min":
      case "minute":
      case "minutes":
        return new Date(now.getTime() - amount * 60 * 1000);

      case "hour":
      case "hours":
        return new Date(now.getTime() - amount * 60 * 60 * 1000);

      case "day":
      case "days":
        return new Date(now.getTime() - amount * 24 * 60 * 60 * 1000);

      case "month":
      case "months":
        const d1 = new Date(now);
        d1.setMonth(d1.getMonth() - amount);
        return d1;

      case "year":
      case "years":
        const d2 = new Date(now);
        d2.setFullYear(d2.getFullYear() - amount);
        return d2;

      default:
        return new Date();
    }
  } catch (error) {
    return new Date();
  }
};
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
