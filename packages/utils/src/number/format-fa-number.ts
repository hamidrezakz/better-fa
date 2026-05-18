/**
 * Formats a number as a Persian (fa-IR) locale string.
 * @param value Numeric value
 * @returns Formatted Persian number string
 * @example
 * formatFaNumber(123456) // "۱۲۳٬۴۵۶"
 * formatFaNumber(1234.56) // "۱٬۲۳۴٫۵۶"
 */
export function formatFaNumber(value: number): string {
  return new Intl.NumberFormat("fa-IR").format(value);
}
