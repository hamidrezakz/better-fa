import { FA_LOCALE } from "../constants";

/**
 * Formats a number as Persian-locale currency.
 *
 * @example
 * formatFaCurrency(1000); // "‎ریال ۱٬۰۰۰"
 * formatFaCurrency(1000, "USD"); // "‎$۱٬۰۰۰٫۰۰"
 * formatFaCurrency(1000, "IRR", { maximumFractionDigits: 0 }); // "‎ریال ۱٬۰۰۰"
 */
export function formatFaCurrency(
  value: number,
  currency: string = "IRR",
  options?: Omit<Intl.NumberFormatOptions, "style" | "currency">,
): string {
  return new Intl.NumberFormat(FA_LOCALE, {
    style: "currency",
    currency,
    ...options,
  }).format(value);
}
