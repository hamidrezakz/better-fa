/**
 * Formats a date value to Persian (fa-IR) locale string.
 * @param value Date, string, or number to format
 * @param options Optional Intl.DateTimeFormat options
 * @returns Formatted Persian date string
 * @example
 * // Basic usage (Persian calendar)
 * formatFaDate('2024-01-01') // "۱۴۰۲/۱۰/۱۱"
 * // With Date object (Persian calendar)
 * formatFaDate(new Date(2024, 0, 1)) // "۱۴۰۲/۱۰/۱۱"
 * // Show full year, month (long), and day (Persian calendar)
 * formatFaDate('2024-01-01', { year: 'numeric', month: 'long', day: '2-digit' }) // "۱۱ دی ۱۴۰۲"
 * // Only year and month (Persian calendar)
 * formatFaDate('2024-01-01', { year: '2-digit', month: 'short' }) // "دی ۰۲"
 * // Weekday, full date (Persian calendar)
 * formatFaDate('2024-01-01', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) // "۱۴۰۲ دی ۱۱, دوشنبه"
 * // With time (hour, minute)
 * formatFaDate('2024-01-01T15:30:00', { hour: '2-digit', minute: '2-digit' }) // "۱۵:۳۰"
 * // Gregorian calendar
 * formatFaDate('2024-01-01', { calendar: 'gregory' }) // "۲۰۲۴/۱/۱"
 */
export function formatFaDate(
  value: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid date value");
  }

  return new Intl.DateTimeFormat("fa-IR", options).format(date);
}
