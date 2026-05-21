import { FA_LOCALE } from "../constants";

/**
 * Formats a number using the Persian (`fa-IR`) locale.
 *
 * @example
 * formatFaNumber(123456); // "۱۲۳٬۴۵۶"
 * formatFaNumber(1234.56); // "۱٬۲۳۴٫۵۶"
 * formatFaNumber(0.5, { style: "percent" }); // "٪۵۰"
 */
export function formatFaNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(FA_LOCALE, options).format(value);
}
