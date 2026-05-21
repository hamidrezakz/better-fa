import { FA_LOCALE } from "../constants";

/**
 * Formats a date using the Persian (`fa-IR`) locale (Persian calendar by default).
 *
 * @example
 * formatFaDate("2024-01-01"); // "۱۴۰۲/۱۰/۱۱"
 * formatFaDate(new Date(2024, 0, 1)); // "۱۴۰۲/۱۰/۱۱"
 * formatFaDate("2024-01-01", {
 *   year: "numeric",
 *   month: "long",
 *   day: "2-digit",
 * }); // "۱۱ دی ۱۴۰۲"
 * formatFaDate("2024-01-01", { calendar: "gregory" }); // "۲۰۲۴/۱/۱"
 */
export function formatFaDate(
  value: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new RangeError("Invalid date value");
  }

  return new Intl.DateTimeFormat(FA_LOCALE, options).format(date);
}
